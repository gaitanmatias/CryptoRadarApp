import React, { useEffect, useState } from 'react'
import './HomePage.css'
import mockCryptos from '../../mockData'
import CryptoList from '../../components/CryptoListComponent/CryptoListComponent'

function HomePage() {
  return (
    <main className="home-page">
      <section className="hero">
        <h1 className='hero-title'>Sigue tus criptos favoritas en tiempo real</h1>
        <p className="slogan">Tu puerta de entrada al mundo de las criptomonedas. Consulta precios en tiempo real, analiza tendencias y administra tu lista de seguimiento fácilmente.</p>
      </section>

      <section className='crypto-section'>
          {/* <SearchBar /> */}
        <section className='crypto-list-section'>
          <p className='crypto-list-description'>Explora las criptomonedas más populares</p>
          <CryptoList cryptos={mockCryptos} />
        </section>
      </section>
    </main>
  )
}

export default HomePage