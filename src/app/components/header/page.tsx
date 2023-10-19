"use client";
import {
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Modal,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Image from "next/image";
import "./page.scss";
import { useState } from "react";
import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import avatar from "../../../../public/assets/img/1.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import SideMenu from "../sideMenu/page";
import logo from "../../../../public/assets/img/logo.jpg";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    console.log("open menu user");
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  const [iconSwitch, setIconSwitch] = useState(false);

  const handleSwitch = () => {
    setIconSwitch(!iconSwitch);
    setOpenMenu(!openMenu);
    console.log("trang thai menu: ", openMenu);
  };
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  const style = {
    position: "absolute" as "absolute",
    left: "47%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    border: "none",
    boxShadow: 24,
    padding: "10px",
    animation: "slideIn 0.2s ease-in-out",
  };
  const styleSubmenu = {
    position: "absolute" as "absolute",
    top: "22%",
    left: "85%",
    transform: "translate(-50%, -50%)",
    width: 230,
    border: "none",
    boxShadow: 24,
    "@media screen and (max-width: 850px)": {
      top: "37%",
      left: "58%",
    },
  };
  const infoStyle = {
    display: "flex",
    padding: "12px 16px",
    alignItems: "center",
    gap: "15px",
  };
  const avatarStyle = {
    width: "40px",
    borderRadius: "30px",
    height: "40px",
  };
  const nameStyle = {
    fontSize: "17px",
    fontWeight: 600,
  };

  return (
    <div className="header-container">
      <div className="top">
        <div className="left">
          {/* Modal menu mobile */}
          {/* <IconButton onClick={handleOpenMenu} className="icon-menu">
          <MenuIcon />
        </IconButton>
        <Modal
          open={openMenu}
          onClose={handleMenuClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <SideMenu />
          </Box>
        </Modal> */}
          {/* Modal menu mobile */}
          <div style={{ width: 100, height: 50 }} className="logo-container">
            <Image src={logo} alt="logo" width={160} height={80} />
          </div>
        </div>
        <div className="menu-container">
          <div className="menu-list">
            <div className="menu-items">
              <HomeOutlinedIcon />
              <Link className="menu__item-link" href="#">
                home
              </Link>
            </div>
            <div className="menu-items">
              <PeopleAltOutlinedIcon />
              <Link className="menu__item-link" href="#">
                khách
              </Link>
            </div>
            <div className="menu-items">
              <AttachMoneyOutlinedIcon />
              <Link className="menu__item-link" href="#">
                tiền
              </Link>
            </div>
            <div className="menu-items">
              <AssignmentOutlinedIcon />
              <Link className="menu__item-link" href="#">
                quản lý
              </Link>
            </div>
            <div className="menu-items">
              <InsertChartOutlinedIcon />
              <Link className="menu__item-link" href="/register">
                đăng ký
              </Link>
            </div>
            <div className="menu-items">
              <LocalPhoneOutlinedIcon />
              <Link className="menu__item-link" href="/login">
                đăng nhập
              </Link>
            </div>
          </div>
        </div>

        <div className="right-container">
          <div className="right-items">
            <SearchIcon sx={{ fontSize: "25px" }} />
            <PersonOutlineOutlinedIcon sx={{ fontSize: "25px" }} />
            {!iconSwitch ? (
              <MenuIcon onClick={handleSwitch} className="menuIcon" />
            ) : (
              <CloseIcon onClick={handleSwitch} />
            )}
          </div>
        </div>
      </div>
      <div
        className="sub-menuContainer"
        style={
          openMenu
            ? { display: "block", transform: "translateY(0)", opacity: 1, transition: "transform 0.3s ease" }
            : { display: "none", transform: "translateY(-116%)", opacity: 0.6  }
        }
      >
        <nav className="sub-menuList">
          <div className="sub-menuItems">
            <Link href="#" className="sub-menuItem">
              home
            </Link>
          </div>
          <div className="sub-menuItems">
            <Link href="#" className="sub-menuItem">
              khách
            </Link>
          </div>
          <div className="sub-menuItems">
            <Link href="#" className="sub-menuItem">
              tiền
            </Link>
          </div>
          <div className="sub-menuItems">
            <Link href="#" className="sub-menuItem">
              quản lý - sự cố
            </Link>
          </div>
          <div className="sub-menuItems">
            <Link href="#" className="sub-menuItem">
              quản lý - hợp đồng
            </Link>
          </div>
          <div className="sub-menuItems">
            <Link href="#" className="sub-menuItem">
              báo cáo
            </Link>
          </div>
          <div className="sub-menuItems">
            <Link href="/register" className="sub-menuItem">
              đăng ký
            </Link>
          </div>
          <div className="sub-menuItems">
            <Link href="/login" className="sub-menuItem">
              đăng nhập
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderComponent;
