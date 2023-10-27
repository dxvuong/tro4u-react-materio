"use client";
import TabAccountSetting from "@/app/components/tabAccountSetting/page";
import React from "react";
import "./page.scss";
import HeaderComponent from "@/app/components/header/page";
import SideMenu from "@/app/components/sideMenu/page";
const AccountSetting = () => {
  return (
    <div className="container"> {/**dynamic */}
      

      <div className="main"> {/**dynamic */}
        <HeaderComponent />  {/**dynamic */}
        <div className="account-container">
          <TabAccountSetting />
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
