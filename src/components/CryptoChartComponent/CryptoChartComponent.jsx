import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { useEffect, useState } from "react";
import "./CryptoChartComponent.css"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

const formatDate = (timestamp, timeframe) => {
  const date = new Date(timestamp);
  if (timeframe === "1") {
    return `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
  } else if (timeframe === "7") {
    return date.toLocaleDateString("es-ES", { weekday: "short" });
  } else {
    return date.toLocaleDateString("es-ES", { month: "short", year: "2-digit" });
  }
};

const CryptoChartComponent = ({ coinId }) => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState("7");

  useEffect(() => {
    const fetchChart = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${timeframe}`
        );
        const data = await res.json();
        setChartData(data.prices);
      } catch (error) {
        console.error("Error al cargar gráfico:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChart();
  }, [coinId, timeframe]);

  const data = {
    labels: chartData.map((p) => formatDate(p[0], timeframe)),
    datasets: [
      {
        label: "(USD)",
        data: chartData.map((p) => p[1]),
        fill: true,
        borderColor: "#c950ff",
        backgroundColor: "rgba(106, 79, 255, 0.3)",
        tension: 0.3,
        pointRadius: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#ccc",
        },
      },
      y: {
        grid: {
          color: "#333",
        },
        ticks: {
          color: "#ccc",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "#1f2937",
        displayColors: false,
        titleColor: "#fff",
        bodyColor: "#fff",
      },
      interaction: {
        mode: "nearest",
        axis: "x",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: false,
      },
    },
  };

  return (
    <div className="crypto-chart">
      <div className="crypto-chart__buttons">
        <button onClick={() => setTimeframe("1")} className={timeframe === "1" ? "active" : ""}>
          1 Día
        </button>
        <button onClick={() => setTimeframe("7")} className={timeframe === "7" ? "active" : ""}>
          7 Días
        </button>
        <button onClick={() => setTimeframe("365")} className={timeframe === "365" ? "active" : ""}>
          1 Año
        </button>
      </div>

      <div className="crypto-chart__container crypto-detail-chart">
        {loading ? (
          <p>Cargando gráfico...</p>
        ) : (
          <Line data={data} options={options} />
        )}
      </div>
    </div>
  );
};

export default CryptoChartComponent;
