import Image from 'next/image'
import styles from './page.module.css'
import SideMenu from './components/sideMenu/page'
import Dashboard from './components/dashboard/page'
import HeaderComponent from './components/header/page'
import "./globals.css";
export default function Home() {
  return (    
    <div className="container">
    <div className="menu">
      <SideMenu />
    </div>
    
    <div className="main">
      <HeaderComponent />
      <Dashboard/>
    </div>
  </div>
  )
}
