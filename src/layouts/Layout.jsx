import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import './Layout.css'

function Layout() {
  return (
    <div className="layout-container">
      <NavBar />
      <Outlet className="outlet" /> 
      <Footer />
    </div>
  )
}

export default Layout