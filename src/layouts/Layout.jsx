import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarComponent from '../components/NavBarComponent/NavBarComponent'
import FooterComponent from '../components/FooterComponent/FooterComponent'
import './Layout.css'

function Layout() {
  return (
    <div className="layout-container">
      <NavBarComponent />
      <Outlet className="outlet" /> 
      <FooterComponent />
    </div>
  )
}

export default Layout