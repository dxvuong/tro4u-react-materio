"use client"
import React from 'react'
import Footer from '../components/footer/page'
import HeaderComponent from '../components/header/page'
import "../../app/globals.scss"
import WrappComponent from '../components/Wrapp/page'
import TableCustom from '../components/TableCustom/page'
import { usePathname } from 'next/navigation'
const Guest = () => {
  const pathname = usePathname()
  console.log(pathname);
  
  return (
    <WrappComponent>
      <div className="guest-container">
        Khách
      </div>


    </WrappComponent>
    // <div className="container">
    //   <HeaderComponent />
    //   <div className="main">
    //     Khách
    //   </div>
    //   <Footer />
    // </div>
  )
}

export default Guest