import Link from "next/link";
import React from "react";
import "../subMenu/page.scss";

const SubMenu2 = () => {
  return (
    <div className="subMenu-container">
      <div className="subMenu-list">
        <div className="subMenu-items">
          <Link className="subMenu-item" href="#">
            Quản lý khách
          </Link>
          <Link className="subMenu-item" href="#">
            Quản lý thu chi
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default SubMenu2;
