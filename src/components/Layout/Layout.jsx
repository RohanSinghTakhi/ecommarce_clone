import React from 'react'
import NavBar from '../Navbar/NavBar'
import Footer from '../Footer/Footer'

function Layout({children}) {
  return (
    <div><NavBar />
    <div className="main-content min-h-screen">
        {children}
    </div>
    <Footer/>
    </div>
  )
}

export default Layout