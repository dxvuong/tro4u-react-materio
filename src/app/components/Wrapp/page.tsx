import React from 'react'
import HeaderComponent from '../header/page'
import { ReactNode } from "react";
import Footer from '../footer/page'
interface WrappComponentProp {
    children: ReactNode
}
const WrappComponent = ({children}: WrappComponentProp) => {
  return (
    <div className='container'>
        <HeaderComponent/>
        <div className="main">
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default WrappComponent