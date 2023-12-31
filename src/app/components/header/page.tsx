"use client";

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

import logo from "../../../../public/assets/img/logo 4u new-15.png";
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
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import KeyIcon from '@mui/icons-material/Key';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

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
  const [openSearchInput, setOpenSearchInput] = useState(false);

  const handleOpenSearchInput = () => {
    setOpenSearchInput(!openSearchInput);
  };
  const handleCloseSearchInput = () => {
    setOpenSearchInput(false);
  };
  const dataFromFather = "dữ liệu";
  const handleSwitch = () => {
    setIconSwitch(!iconSwitch);
    setOpenMenu(!openMenu);
    console.log("trang thai menu: ", openMenu);
  };

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
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const handleOpenSubmenu2 = () => {
    setOpenSubmenu2(!openSubmenu2);
  };
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [apiLoginData, setApiLoginData] = useState<ApiProps>();
  const textfield = {
    position: "relative",
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#9155fd",
      color: "#9155fd",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(58, 53, 65, 0.54)",
      color: "#9155fd",
    },
    ".MuiOutlinedInput-root": {
      borderRadius: "6px",
    },
    ".MuiInputLabel-outlined.Mui-focused": {
      color: "#9155fd",
    },
    ".MuiOutlinedInput-root.Mui-focused.MuiOutlinedInput-notchedOutline": {
      borderColor: "#9155fd",
    },
    ".MuiOutlinedInput-root:hover": {
      borderColor: "#9155fd",
    },
    "& .MuiOutlinedInput-root:hover": {
      "& fieldset": {
        borderColor: "#9155fd",
      },
    },
  };

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

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.clear();
    redirect("/");
    // Redirect to the home page or any other desired page after logout
    // Example: window.location.href = "/";
  };
  const styleInputSearch = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "360px",
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 1,
    borderRadius: "6px",
    "@media (max-width: 767px)": {
      width: 330,
    },
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
          </Box>o
        </Modal> */}
          {/* Modal menu mobile */}
          <div style={{ width: 90 }} className="logo-container">
            <Image src={logo} alt="logo" priority={true} className="logo" width={160} height={40} />
          </div>
        </div>
        <div className="menu-container">
          <div className="menu-list">
            <div className={`menu-items ${pathname === "/" ? "active" : ""}`}>
              <HomeIcon className="icon" />
              <Link
                className={`menu__item-link ${pathname === "/" ? "active" : ""
                  }`}
                href="/"
              >
                home
              </Link>
            </div>
            <div
              className={`menu-items ${pathname === "/guest/" ? "active" : ""}`}
            >
              <GroupsIcon className="icon" />
              <Link
                className={`menu__item-link ${pathname === "/guest/" ? "active" : ""
                  }`}
                href="/guest"
              >
                khách
              </Link>
            </div>
            <div
              className={`menu-items ${pathname === "/money/" ? "active" : ""}`}
            >
              <MonetizationOnIcon className="icon" />
              <Link
                className={`menu__item-link ${pathname === "/money/" ? "active" : ""
                  }`}
                href="/money"
              >
                tiền
              </Link>
            </div>

            <div
              className={`menu-items ${pathname === "/guestReport/" || pathname === "/income/"
                ? "active"
                : ""
                }`}
            >
              <BarChartIcon className="icon" />
              <Link
                className={`menu__item-link ${pathname === "/guestReport/" || "/income/" ? "active" : ""
                  }`}
                href="#"
              >
                báo cáo
              </Link>
              <ArrowDropDownIcon className="arrow" />
              <SubMenu />
            </div>

            <div
              className={`menu-items ${pathname === "/guestManage/" || pathname === "/incomeManage/"
                ? "active"
                : ""
                }`}
            >
              <AssignmentOutlinedIcon className="icon" />
              <Link
                className={`menu__item-link ${pathname === "/guestManage/" || pathname === "/incomeManage/"
                  ? "active"
                  : ""
                  }`}
                href="/manage"
              >
                quản lý
              </Link>
              <ArrowDropDownIcon className="arrow" />
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
            <div className="search-cotainer">
              <SearchIcon
                className="search-icon"
                onClick={handleOpenSearchInput}
              />
              <Modal
                open={openSearchInput}
                onClose={handleCloseSearchInput}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="ModalSearch"
                sx={{ padding: "35px" }}
              >
                <Box sx={styleInputSearch}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{
                        '& .MuiTabs-indicator': {
                          backgroundColor: 'rgb(128, 75, 223)',
                        },
                      }}>
                        <Tab label="Cục bộ" value="1" style={{ color: "rgb(128, 75, 223)" }} />
                        <Tab label="Khách" value="2" style={{ color: "rgb(128, 75, 223)" }} />

                      </TabList>
                    </Box>
                    <TabPanel value="1">
                      <TextField
                        id="outlined-basic"
                        label="cục bộ"
                        variant="outlined"
                        className="textField-container"
                        sx={textfield}
                        fullWidth
                      // color={themes.palette.primary.main}
                      />
                      <IconButton
                        aria-label="delete"
                        size="small"
                        sx={{
                          position: "absolute",
                          fontSize: "25px",
                          right: "11%",
                          top: "54%"
                        }}
                      >
                        <SearchIcon fontSize="inherit" />
                      </IconButton>
                    </TabPanel>
                    <TabPanel value="2">
                      <TextField
                        id="outlined-basic"
                        label="Tìm kiếm khách"
                        variant="outlined"
                        className="textField-container"
                        sx={textfield}
                        fullWidth
                      // color={themes.palette.primary.main}
                      />
                      <IconButton
                        aria-label="delete"
                        size="small"
                        sx={{
                          position: "absolute",
                          fontSize: "25px",
                          right: "11%",
                          top: "54%"
                        }}
                      >
                        <SearchIcon fontSize="inherit" />
                      </IconButton>
                    </TabPanel>

                  </TabContext>

                </Box>
              </Modal>
            </div>

            {apiLoginData ? (
              <div className="menu-user">
                <Image
                  src={avatar}
                  alt="avatar "
                  width={40}
                  height={40}
                  priority={true}
                  style={{ borderRadius: "50%", cursor: "pointer" }}
                // onClick={handleUserMenu}
                />
                <Paper className="popperMenu" sx={{ width: "240px !important", maxWidth: '100%' }}>
                  <MenuList className="menu-list">
                    <MenuItem className="menu-item" style={{ padding: "10px 16px" }}>
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
                    <Link href="#"
                      className="menu-item bg"
                    >
                      <PersonOutlineIcon className="icon" />
                      <span
                        style={{
                          color: "rgba(58, 53, 65, 0.68)",
                        }}
                      >
                        Thông tin tài khoản
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="menu-item bg"
                    >
                      <KeyIcon className="icon" />
                      <span
                        style={{
                          color: "rgba(58, 53, 65, 0.68)",
                        }}
                      >
                        Đổi mật khẩu
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="menu-item bg"
                    >
                      <AttachMoneyIcon className="icon" />
                      <span
                        style={{
                          color: "rgba(58, 53, 65, 0.68)",
                        }}
                      >
                        Xu
                      </span>
                    </Link>
                    <Divider />
                    <Link
                      href="/"
                      className="menu-item"
                      onClick={handleLogout}
                    >
                      <LogoutIcon className="icon" />
                      <span >Đăng xuất</span>
                    </Link>

                  </MenuList>
                </Paper>

              </div>
            ) : (
              <div className="menu-user">
                <PersonOutlineOutlinedIcon
                  sx={{ fontSize: "25px", color: "#333", cursor: "pointer" }}
                // onClick={handleUserMenu}
                />

                <Paper className="popperMenu" sx={{ width: 230, maxWidth: '100%' }}>
                  <MenuList className="menu-list">
                    <Link href="/login" className="menu-item">
                      <LoginIcon className="icon" />
                      <span >Đăng nhập</span>
                    </Link>
                    <Link href="/register" className="menu-item">
                      <LogoutIcon className="icon" />
                      <span >Đăng Ký</span>
                    </Link>
                    <Link href="/components/NewUser" className="menu-item">
                      <LogoutIcon className="icon" />
                      <span >Người dùng mới</span>
                    </Link>
                    <Link href="/components/Empty" className="menu-item">
                      <LogoutIcon className="icon" />
                      <span >Trống</span>
                    </Link>
                  </MenuList>
                </Paper>
              </div>
            )}


          </div>
        </div>
      </div>

      <div className={`mobile-menuContainer ${openMenu ? "active" : ""}`}>
        <nav className="mobile-menuList">
          <div className="mobile-menuItems">
            <Link
              href="/"
              className={`mobile-menuItem ${pathname === "/" ? "active" : ""}`}
            >
              <div className="left">
                <HomeOutlinedIcon />
                <span className="mobile-menuItem__title">home</span>
              </div>
            </Link>
          </div>
          <div className="mobile-menuItems">
            <Link href="/guest" className={`mobile-menuItem ${pathname === "/guest" ? "active" : ""}`}>
              <div className="left">
                <PersonOutlineOutlinedIcon />
                <span className="mobile-menuItem__title">khách</span>
              </div>
            </Link>
          </div>
          <div className="mobile-menuItems">
            <Link href="/money" className={`mobile-menuItem ${pathname === "/money" ? "active" : ""}`}>
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
          <Link
            href="/"
            className={`menuMobile-items ${pathname === "/" ? "activeMobieMenu" : ""
              } `}
          >
            <HomeIcon />
            <span>Home</span>
          </Link>

          <Link
            href="/guest"
            className={`menuMobile-items ${pathname === "/guest/" ? "activeMobieMenu" : ""
              } `}
          >
            <GroupsIcon />
            <span>Khách</span>
          </Link>

          <Link
            href="/money"
            className={`menuMobile-items ${pathname === "/money/" ? "activeMobieMenu" : ""
              } `}
          >
            <MonetizationOnIcon />
            <span>Tiền</span>
          </Link>

          <div

            className={`menuMobile-items ${pathname === "/report" ? "activeMobieMenu" : ""
              } `}
          >

            <BarChartIcon />

            <span className="title">
              Báo cáo
              <ArrowDropUpIcon className="arrowTop" />
            </span>

            <div className="subMenuMobile">
              <SubMenu />
            </div>


          </div>

          <div

            className={`menuMobile-items ${pathname === "/quanly" ? "activeMobieMenu" : ""
              } `}
          >
            <AssignmentOutlinedIcon />
            <span className="title">Quản lý
              <ArrowDropUpIcon className="arrowTop" /></span>
            <div className="subMenuMobile">
              <SubMenu2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
