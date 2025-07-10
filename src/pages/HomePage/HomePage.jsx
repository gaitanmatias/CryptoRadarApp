import React, { useEffect, useState } from 'react'
import './HomePage.css'
import { getTopCryptos } from '../../services/cryptoService'
import CryptoList from '../../components/CryptoListComponent/CryptoListComponent'
import SearchBarComponent from "../../components/SearchBarComponent/SearchBarComponent";

function HomePage() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getTopCryptos();
      setCryptos(result);
    };
    fetchData();
  }, []);

  return (
    <main className="home-page">
      <section className="hero">
        <h1 className='hero-title'>Sigue tus criptos favoritas en tiempo real</h1>
        <p className="slogan">Tu puerta de entrada al mundo de las criptomonedas. Consulta precios en tiempo real, analiza tendencias y administra tu lista de seguimiento fácilmente.</p>
      </section>

      <section className='crypto-section'>
        <p className='crypto-description'>Explora las criptomonedas más populares</p>
        <SearchBarComponent cryptos={cryptos} />
        <CryptoList cryptos={cryptos.slice(0, 10)} />
      </section>
    </main>
  )
}

export default HomePage