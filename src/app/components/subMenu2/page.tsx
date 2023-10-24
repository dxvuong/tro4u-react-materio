import Link from "next/link";
import React from "react";
import "./page.scss";

const SubMenu2 = () => {
  return (
    <div className="subMenu-container">
      <div className="subMenu-list">
        <div className="subMenu-items">
          <Link className="subMenu-item" href="#">
            <span>Quản lý khách</span>
          </Link>
          <Link className="subMenu-item" href="#">
            <span>Quản lý thu chi</span>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default SubMenu2;
