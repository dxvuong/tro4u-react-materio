import React from "react";
import "./page.scss"
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapp">
        <div className="footer-top">
          <div className="footer-top__items1">
            <h2 className="footer-title">Giới thiệu</h2>
            <p className="footer-text">
              Dựa trên việc đã quản lý hơn 1.000 phòng trọ, chúng tôi muốn <br/> chia
              sẽ phần mềm quản lý phòng trọ hoàn toàn miễn phí cho <br/> những ai có
              nhu cầu
            </p>
            <div className="footer-social"></div>
          </div>
          <div className="footer-top__items2">
            <h2 className="footer-title">thông tin</h2>
            <span>Giới thiệu</span>
            <span>Hợp đồng mẫu</span>
            <span>Quy trình vận hành</span>
            
          </div>
          <div className="footer-top__items3">
            <h2 className="footer-title">liên hệ</h2>
            <span>Hotline: 0907.771.881</span>
            <span>Cho thuê phòng</span>
            <span>Web: https://tro4u.com</span>
            <span>Web: Facebook </span>
            
          </div>

        </div>
        <div className="footer-bottom">
            <span>Copyright© 2023 <span style={{color:"#9155fd", cursor: "pointer"}}>Tro4u</span></span>
            <span>Website: Https://Tro4u.Com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
