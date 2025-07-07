import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarComponent from '../components/NavBarComponent/NavBarComponent'
import FooterComponent from '../components/FooterComponent/FooterComponent'
import './Layout.css'

function Layout() {
  return (
    <div className="layout-container">
      <NavBarComponent />
      <main className="main-content">
        <Outlet className="outlet" /> 
      </main>
      <FooterComponent />
    </div>
  )
}

export default Layout