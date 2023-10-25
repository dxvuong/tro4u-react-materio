"use client";
import {
  Avatar,
  Box,
  ClickAwayListener,
  Divider,
  Grow,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Modal,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Image from "next/image";
import "./page.scss";
import { useEffect, useState } from "react";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

import logo from "../../../../public/assets/img/logo4u.png";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import GroupsIcon from "@mui/icons-material/Groups";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BarChartIcon from "@mui/icons-material/BarChart";
import SubMenu from "../subMenu/page";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SubMenu2 from "../subMenu2/page";
import { redirect, usePathname } from "next/navigation";
import avatar from "../../../../public/assets/img/1.png";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginOutlined from "@mui/icons-material/LoginOutlined";

type ApiProps = {
  user_token: string;
  user: {
    avatar: string;
    email: string;
    full_name: string;
    id: number;
    id_nhom_user: number;
    phone: string;
  };
};

const HeaderComponent = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [iconSwitch, setIconSwitch] = useState(false);
  const [openMenuUser, setOpenMenuUser] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleSwitch = () => {
    setIconSwitch(!iconSwitch);
    setOpenMenu(!openMenu);
    console.log("trang thai menu: ", openMenu);
  };
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenMenuUser(false);
    } else if (event.key === "Escape") {
      setOpenMenuUser(false);
    }
  }

  const handleUserMenu = () => {
    setOpenMenuUser(!openMenuUser);
  };

  const [openSubmenu, setOpenSubmenu] = useState(false);

  const handleOpenSubmenu = () => {
    setOpenSubmenu(!openSubmenu);
  };
  const handleCloseUserMenu = () => {
    setOpenMenuUser(false);
  };

  const [openSubmenu2, setOpenSubmenu2] = useState(false);

  const handleOpenSubmenu2 = () => {
    setOpenSubmenu2(!openSubmenu2);
  };

  const [apiLoginData, setApiLoginData] = useState<ApiProps>();

  useEffect(() => {
    // Example: Fetch user data here
    const fetchData = async () => {
      if (typeof window !== "undefined") {
        const userDataString = sessionStorage.getItem("user");
        if (userDataString) {
          const user = JSON.parse(userDataString);
          setApiLoginData(user);
          console.log("data login12", user);
        }
      }
    };

    fetchData(); // Call the function to fetch data

    // You can add more side effects here if needed
  }, []);
  console.log("state", apiLoginData);
  const handleLogout = () => {
    // Clear session storage
    sessionStorage.clear();
    redirect("/");
    // Redirect to the home page or any other desired page after logout
    // Example: window.location.href = "/";
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
            <div className={`menu-items ${pathname === "/" ? "active" : ""}`}>
              <HomeIcon className="icon" />
              <Link
                className={`menu__item-link ${
                  pathname === "/" ? "active" : ""
                }`}
                href="#"
              >
                home
              </Link>
            </div>
            <div className="menu-items">
              <GroupsIcon className="icon" />
              <Link className="menu__item-link" href="#">
                khách
              </Link>
            </div>
            <div className="menu-items">
              <MonetizationOnIcon className="icon" />
              <Link className="menu__item-link" href="#">
                tiền
              </Link>
            </div>
            {/* <div className="menu-items">
              <AssignmentOutlinedIcon className="icon" />
              <Link className="menu__item-link" href="#">
                quản lý
              </Link>
              <div className="pcMenuSub-container">
                <div className="pcMenuSub-list">
                  <div className="pcMenuSub-items">
                    <h2 className="pcMenuSub-title">sự cố</h2>
                    <Link href="#">
                      <span>Máy lạnh, tủ lạnh</span>
                    </Link>
                    <Link href="#">
                      <span>Khóa cửa</span>
                    </Link>
                    <Link href="#">
                      <span>Khác</span>
                    </Link>
                  </div>
                  <div className="pcMenuSub-items">
                    <h2 className="pcMenuSub-title">hợp đồng</h2>
                    <Link href="#">
                      <span>Máy lạnh, tủ lạnh</span>
                    </Link>
                    <Link href="#">
                      <span>Khóa cửa</span>
                    </Link>
                    <Link href="#">
                      <span>khác</span>
                    </Link>
                  </div>
                  <div className="pcMenuSub-items">
                    <h2 className="pcMenuSub-title">thiết lập</h2>
                    <Link href="#">
                      <span>Máy lạnh, tủ lạnh</span>
                    </Link>
                    <Link href="#">
                      <span>Khóa cửa</span>
                    </Link>
                    <Link href="#">
                      <span>Khác</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="menu-items">
              <BarChartIcon className="icon" />
              <Link className="menu__item-link" href="#">
                báo cáo
              </Link>
              <ArrowDropDownIcon />
              <SubMenu />
            </div>

            <div className="menu-items">
              <AssignmentOutlinedIcon className="icon" />
              <Link className="menu__item-link" href="#">
                quản lý
              </Link>
              <ArrowDropDownIcon />
              <SubMenu2 />
            </div>
            {/* {user ? (
              <div className="menu-items">
                <InsertChartOutlinedIcon className="icon" />
                <Link
                  className="menu__item-link"
                  href="/"
                  onClick={handleLogout}
                >
                  đăng xuất
                </Link>
              </div>
            ) : (
              <>
                <div className="menu-items">
                  <InsertChartOutlinedIcon className="icon" />
                  <Link className="menu__item-link" href="/register">
                    đăng ký
                  </Link>
                </div>
                <div className="menu-items">
                  <LocalPhoneOutlinedIcon className="icon" />
                  <Link className="menu__item-link" href="/login">
                    đăng nhập
                  </Link>
                </div>
              </>
            )} */}
          </div>
        </div>

        <div className="right-container">
          <div className="right-items">
            <SearchIcon sx={{ fontSize: "25px", color: "#333" }} />

            {apiLoginData ? (
              <div className="menu-user">
                <Image
                  src={avatar}
                  alt="avatar "
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%", cursor: "pointer" }}
                  onClick={handleUserMenu}
                />
                <Popper
                  open={openMenuUser}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom-start"
                            ? "left top"
                            : "left bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleCloseUserMenu}>
                          <MenuList
                            autoFocusItem={openMenuUser}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={handleCloseUserMenu}>
                              <div className="profile-container">
                                <div className="avatar">
                                  <Avatar>H</Avatar>
                                </div>
                                <div className="info">
                                  <h5 className="name">
                                    {apiLoginData.user.full_name}
                                  </h5>
                                  <span className="role">Admin</span>
                                </div>
                              </div>
                            </MenuItem>
                            <Divider />
                            <MenuItem
                              onClick={handleCloseUserMenu}
                              className="menu-items"
                            >
                              <PersonOutlineIcon className="icon" />
                              <span
                                style={{
                                  color: "rgba(58, 53, 65, 0.68)",
                                }}
                              >
                                Thông tin tài khoản
                              </span>
                            </MenuItem>
                            <MenuItem
                              onClick={handleCloseUserMenu}
                              className="menu-items"
                            >
                              <LogoutIcon className="icon" />
                              <Link href="/" onClick={handleLogout}>
                                <span
                                  style={{
                                    color: "rgba(58, 53, 65, 0.68)",
                                  }}
                                >
                                  Đăng xuất
                                </span>
                              </Link>
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            ) : (
              <div>
                <PersonOutlineOutlinedIcon
                  sx={{ fontSize: "25px", color: "#333", cursor: "pointer" }}
                  onClick={handleUserMenu}
                />
                <Popper
                  open={openMenuUser}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom-start"
                            ? "left top"
                            : "left bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleCloseUserMenu}>
                          <MenuList
                            autoFocusItem={openMenuUser}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem
                              onClick={handleCloseUserMenu}
                              className="menu-items bg-hover"
                            >
                              <LoginIcon className="icon" />
                              <Link href="/login">
                                <span
                                  style={{
                                    color: "rgba(58, 53, 65, 0.68)",
                                  }}
                                >
                                  Đăng nhập
                                </span>
                              </Link>
                            </MenuItem>
                            <MenuItem
                              onClick={handleCloseUserMenu}
                              className="menu-items bg-hover"
                            >
                              <LogoutIcon className="icon" />
                              <Link href="/register">
                                <span
                                  style={{
                                    color: "rgba(58, 53, 65, 0.68)",
                                  }}
                                >
                                  Đăng ký
                                </span>
                              </Link>
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            )}

            {/* {!iconSwitch ? (
              <MenuIcon onClick={handleSwitch} className="menuIcon" />
            ) : (
              <CloseIcon onClick={handleSwitch} />
            )} */}
          </div>
        </div>
      </div>
      <div className={`mobile-menuContainer ${openMenu ? "active" : ""}`}>
        <nav className="mobile-menuList">
          <div className="mobile-menuItems">
            <Link
              href="#"
              className={`mobile-menuItem ${pathname === "/" ? "active" : ""}`}
            >
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
            </Link>
            {openSubmenu ? (
              <RemoveOutlinedIcon
                onClick={handleOpenSubmenu}
                sx={{ zIndex: 2 }}
              />
            ) : (
              <AddOutlinedIcon onClick={handleOpenSubmenu} sx={{ zIndex: 2 }} />
            )}
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
            </Link>
            {openSubmenu2 ? (
              <RemoveOutlinedIcon
                onClick={handleOpenSubmenu2}
                sx={{ zIndex: 2 }}
              />
            ) : (
              <AddOutlinedIcon
                onClick={handleOpenSubmenu2}
                sx={{ zIndex: 2 }}
              />
            )}
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

          {apiLoginData ? (
            <div className="mobile-menuItems">
              <Link href="/" className="mobile-menuItem" onClick={handleLogout}>
                <div className="left">
                  <LogoutOutlinedIcon />
                  <span className="mobile-menuItem__title">đăng xuất</span>
                </div>
              </Link>
            </div>
          ) : (
            <>
              <div className="mobile-menuItems">
                <Link href="/register" className="mobile-menuItem">
                  <div className="left">
                    <LogoutOutlinedIcon />
                    <span className="mobile-menuItem__title">đăng ký</span>
                  </div>
                </Link>
              </div>
              <div className="mobile-menuItems">
                <Link href="/login" className="mobile-menuItem">
                  <div className="left">
                    <LoginOutlinedIcon />
                    <span className="mobile-menuItem__title">đăng nhập</span>
                  </div>
                </Link>
              </div>
            </>
          )}
        </nav>
      </div>

      <div className="menuMobile-container">
        <div className="menuMobile-list">
          <Link href="#" className={`menuMobile-items ${pathname === "/" ? "activeMobieMenu" : ""} `}>
            <HomeIcon/>
            <span>Home</span>
          </Link>
          <Link href="#" className={`menuMobile-items ${pathname === "/khach" ? "activeMobieMenu" : ""} `}>
            <GroupsIcon/>
            <span>Khách</span>
          </Link>
          <Link href="#" className={`menuMobile-items ${pathname === "/tien" ? "activeMobieMenu" : ""} `}>
            <MonetizationOnIcon/>
            <span>Tiền</span>
          </Link>
          <Link href="#"className={`menuMobile-items ${pathname === "/baocao" ? "activeMobieMenu" : ""} `}>
            <BarChartIcon/>
            <span>Báo cáo</span>
          </Link>
          <Link href="#" className={`menuMobile-items ${pathname === "/quanly" ? "activeMobieMenu" : ""} `}>
            <AssignmentOutlinedIcon/>
            <span>Quản lý</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
