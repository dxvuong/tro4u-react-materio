import SideMenu from "./components/sideMenu/page";
import Dashboard from "./components/dashboard/page";
import HeaderComponent from "./components/header/page";
import "./globals.scss";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <div className="container">
      <HeaderComponent />
      <div className="main">
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
}
