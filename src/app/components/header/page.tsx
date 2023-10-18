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

import SideMenu from "../sideMenu/page";
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
  const roleStyle = {
    fontSize: "12px",
    color: "#b4b3b3",
  };

  return (
    <div className="header-container">
      <div className="left">
        <IconButton onClick={handleOpenMenu} className="icon-menu">
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
        </Modal>
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

          <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Paper sx={styleSubmenu}>
              <div style={infoStyle}>
                <div className="left">
                  <Image src={avatar} alt="avatar" style={avatarStyle} />
                </div>
                <div className="right">
                  <span style={nameStyle}>John Doe</span>
                  <div style={roleStyle}>Admin</div>
                </div>
              </div>
              <Divider />
              <MenuList>
                <MenuItem>
                  <ListItemIcon>
                    <PermIdentityIcon />
                  </ListItemIcon>
                  <ListItemText>Profile</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <MailOutlineIcon />
                  </ListItemIcon>
                  <ListItemText>Inbox</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ChatBubbleOutlineIcon />
                  </ListItemIcon>
                  <ListItemText>Chat</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText>Setting</ListItemText>
                </MenuItem>

                <MenuItem>
                  <ListItemIcon>
                    <AttachMoneyIcon />
                  </ListItemIcon>
                  <ListItemText>Pricing</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <HelpOutlineIcon />
                  </ListItemIcon>
                  <ListItemText>Help</ListItemText>
                </MenuItem>
              </MenuList>
            </Paper>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
