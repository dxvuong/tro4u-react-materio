import React from 'react'
import Footer from '../components/footer/page'
import HeaderComponent from '../components/header/page'
import "../../app/globals.scss"
const Guest = () => {
  return (
    <div className="container">
      <HeaderComponent />
      <div className="main">
        Khách
        
      </div>
      <Footer />
    </div>
  )
}

export default Guest