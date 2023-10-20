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
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import SideMenu from "../sideMenu/page";
import logo from "../../../../public/assets/img/logo4u.png";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const HeaderComponent = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [iconSwitch, setIconSwitch] = useState(false);

  const handleSwitch = () => {
    setIconSwitch(!iconSwitch);
    setOpenMenu(!openMenu);
    console.log("trang thai menu: ", openMenu);
  };

  const [openSubmenu, setOpenSubmenu] = useState(false);

  const handleOpenSubmenu = () => {
    setOpenSubmenu(!openSubmenu);
  };

  const [openSubmenu2, setOpenSubmenu2] = useState(false);

  const handleOpenSubmenu2 = () => {
    setOpenSubmenu2(!openSubmenu2);
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
          <div style={{ width: 80, height: 30 }} className="logo-container">
            <Image src={logo} alt="logo" width={160} height={60} />
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
      <div className={`mobile-menuContainer ${openMenu ? "active" : ""}`}>
        <nav className="mobile-menuList">
          <div className="mobile-menuItems">
            <Link href="#" className="mobile-menuItem">
              <div className="left">
                <HomeOutlinedIcon />
                <span className="mobile-menuItem__title">home</span>
              </div>
            </Link>
          </div>
          <div className="mobile-menuItems">
            <Link href="#" className="mobile-menuItem">
              <div className="left">
                <PersonOutlineOutlinedIcon />
                <span className="mobile-menuItem__title">khách</span>
              </div>
            </Link>
          </div>
          <div className="mobile-menuItems">
            <Link href="#" className="mobile-menuItem">
              <div className="left">
                <AttachMoneyOutlinedIcon />
                <span className="mobile-menuItem__title">tiền</span>
              </div>
            </Link>
          </div>
          <div className="mobile-menuItems">
            <Link href="#" className="mobile-menuItem">
              <div className="left">
                <AttachMoneyOutlinedIcon />
                <span className="mobile-menuItem__title">quản lý - sự cố</span>
              </div>
            </Link>
          </div>
          <div className="mobile-menuItems">
            <Link href="#" className="mobile-menuItem">
              <div className="left">
                <AttachMoneyOutlinedIcon />
                <span className="mobile-menuItem__title">
                  quản lý - hợp đồng
                </span>
              </div>
            </Link>
          </div>
          <div className="mobile-menuItems">
            <Link href="#" className="mobile-menuItem">
              <div className="left">
                <InsertChartOutlinedIcon />
                <span className="mobile-menuItem__title">báo cáo</span>
              </div>

              {openSubmenu ? (
                <RemoveOutlinedIcon onClick={handleOpenSubmenu} />
              ) : (
                <AddOutlinedIcon onClick={handleOpenSubmenu} />
              )}
            </Link>
          </div>

          {/* SUB MENU MOBILE */}
          {openSubmenu ? (
            <div className="subMobileMenu-container">
              <Link href="#" className="subMobileMenu-items">
                <span>doanh thu</span>
              </Link>
              <Link href="#" className="subMobileMenu-items">
                <span>chênh lệch điện nước</span>
              </Link>
              <Link href="#" className="subMobileMenu-items">
                <span>tình trạng cho thuê</span>
              </Link>
              <Link href="#" className="subMobileMenu-items">
                <span>tổng tài sản</span>
              </Link>
              <Link href="#" className="subMobileMenu-items">
                <span>tổng tiền cọc</span>
              </Link>
            </div>
          ) : (
            ""
          )}

          {/* SUB MENU MOBILE */}

          <div className="mobile-menuItems">
            <Link href="#" className="mobile-menuItem">
              <div className="left">
                <SettingsOutlinedIcon />
                <span className="mobile-menuItem__title">thiết lập</span>
              </div>

              {openSubmenu2 ? (
                <RemoveOutlinedIcon onClick={handleOpenSubmenu2} />
              ) : (
                <AddOutlinedIcon onClick={handleOpenSubmenu2} />
              )}
            </Link>
          </div>

          {/* SUB MENU MOBILE */}
          {openSubmenu2 ? (
            <div className="subMobileMenu-container">
              <Link href="#" className="subMobileMenu-items">
                <span>thông báo</span>
              </Link>
              <Link href="#" className="subMobileMenu-items">
                <span>giá dịch vụ</span>
              </Link>
              <Link href="#" className="subMobileMenu-items">
                <span>khuyến mãi</span>
              </Link>
              <Link href="#" className="subMobileMenu-items">
                <span>hợp đồng mẫu</span>
              </Link>
              <Link href="#" className="subMobileMenu-items">
                <span>tài sản trong phòng</span>
              </Link>
              <Link href="#" className="subMobileMenu-items">
                <span>phân quyền nhân viên</span>
              </Link>
            </div>
          ) : (
            ""
          )}

          {/* SUB MENU MOBILE */}

          <div className="mobile-menuItems">
            <Link href="/register" className="mobile-menuItem">
              <div className="left">
                <LocalPhoneOutlinedIcon />
                <span className="mobile-menuItem__title">liên hệ</span>
              </div>
            </Link>
          </div>

          <div className="mobile-menuItems">
            <Link href="/register" className="mobile-menuItem">
              <div className="left">
                <LogoutOutlinedIcon/>
                <span className="mobile-menuItem__title">đăng ký</span>
              </div>
            </Link>
          </div>
          <div className="mobile-menuItems">
            <Link href="/login" className="mobile-menuItem">
              <div className="left">
                <LoginOutlinedIcon/>
                <span className="mobile-menuItem__title">đăng nhập</span>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderComponent;
