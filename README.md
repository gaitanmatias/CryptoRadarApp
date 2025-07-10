# CryptoRadar App — Seguimiento y análisis de criptomonedas en tiempo real

App SPA en **React + Vite** para buscar y mostrar información de criptomonedas usando la API de CoinGecko. Incluye gráficos interactivos y diseño responsivo.

🔗 [Ver demo online](https://cryptoradarapp.netlify.app/)

---

## ⚙️ Tecnologías Utilizadas

El proyecto está desarrollado con **React** y gestionado mediante **React Router DOM** para un enrutamiento fluido en SPA. Para el diseño y estilos se usa **CSS3** con **Flexbox** y tipografías de **Google Fonts**. La aplicación consume datos en tiempo real de la **API de CoinGecko**. El entorno de desarrollo es **Vite**, que facilita una configuración rápida y liviana. Para gráficos interactivos se emplea **Chart.js** con su wrapper para React. Los íconos son de **React Icons**. El código se mantiene versionado con **Git** y **GitHub**, y el despliegue está alojado en **Netlify** para un acceso rápido y seguro.

---

## 🧩 Funcionalidades

- 🎯 Mostrar criptomonedas más populares en el Home.
- 🔍 Búsqueda filtrada con input controlado y autocompletado.
- 📄 Página con listado de resultados tras una búsqueda.
- 📊 Detalle de cada criptomoneda con gráficos (1 día, 7 días, 1 año).
- 🎨 Gráficos estilizados con Chart.js.
- 🔗 Enrutamiento con React Router DOM.
- 📱 Diseño mobile responsive (320 px a 2000 px).

---

## 📁Estructura del proyecto

```
/
├─ public/
│   └─ favicon.webp
│   
├─ src/
│   ├─ components/
│   │   ├─ CryptoChart/
│   │   ├─ SearchBar/
│   │   ├─ CryptoList/
│   │   ├─ CryptoCard/
│   │   ├─ Footer/
│   │   └─ NavBar/
│   │   
│   ├─ layouts/
│   │   
│   ├─ pages/
│   │   ├─ HomePage/
│   │   ├─ DetailPage/
│   │   ├─ SearchResultsPage/
│   │   └─ NotFoundPage/
│   │   
│   ├─ services/
│   │   └─ cryptoService.js
│   │   
│   ├─ icons/
│   │   └─ icons.js
│   │   
│   ├─ styles/
│   │   └─ base.css
│   │   
│   ├─ ReactRouter.jsx
│   │ 
│   ├─ App.jsx
│   │
│   └─ main.jsx
│   
├─ index.html
├─ vite.config.js
└─ package.json
```

---

## 📦 Librerías principales

- React + React Router DOM
- Vite
- CoinGecko API
- Chart.js + react-chartjs-2
- react-icons

---

## 🧩 Próximos pasos

- Modo claro/oscuro con Context API.
- Guardado en favoritos con LocalStorage.
- Internacionalización (EN/ES).
- Mejoras de UI/UX y más metadatos por cripto.

---

## 👨‍💻 Autor

Hecho por [Matías Gaitán](https://github.com/gaitanmatias).
