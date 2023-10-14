"use client";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Image from "next/image";
import "./page.scss";
import { useState } from "react";
import React from "react";
import ModalSubUser from "../ModalSubUser/page";
import MenuIcon from "@mui/icons-material/Menu";
import MenuMobile from "../MenuMobile/page";
const HeaderComponent = () => {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const [openMenu, setOepnMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setOepnMenu(!openMenu);
  };
  const handleMenuClose = () => {
    setOepnMenu(false);
  };

  return (
    <div className="header-container">
      
      <div className="left">
      <IconButton onClick={handleOpenMenu} className="icon-menu">
        <MenuIcon />
      </IconButton>
      {<MenuMobile open={openMenu} close={handleMenuClose}/> }
        <input className="search-field" type="text" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="right">
        <DarkModeIcon className="icon" />
        <NotificationsIcon className="icon" />
        <div className="user-info">
          <Image
            src="https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg"
            alt="user"
            width={30}
            height={30}
            onClick={handleOpen}
          />

          <ModalSubUser open={isOpen} close={handleClose} />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
