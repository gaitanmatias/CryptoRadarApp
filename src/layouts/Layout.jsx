import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarComponent from '../components/NavBarComponent/NavBarComponent'


function Layout() {
  return (
    <div>
      <NavBarComponent />
      <main>
        <Outlet />
      
      </main>
    </div>
  )
}

export default Layout