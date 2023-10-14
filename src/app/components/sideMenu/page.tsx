import React from "react";
import "./page.scss";
import { Box, Divider, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import Home from "@mui/icons-material/Home";
import ManageAccounts from "@mui/icons-material/ManageAccounts";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TypeSpecimenIcon from "@mui/icons-material/TypeSpecimen";
import MoodIcon from "@mui/icons-material/Mood";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import Link from "next/link";

const SideMenu = () => {
  return (
    <Box
    
      sx={{
        width: "100%",
        maxWidth: 260,
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        backgroundColor: "#f4f5fa",
        padding: "10px"
      }}
      
    >
      <div className="menu-logo">
        <h2 className="logo-name">Materio</h2>
      </div>
      <div className="menu-list">
        <Link href="/">
          <div className="menu-item">
            <Home className="menu-icon" />
            <span className="title">Dashboard</span>
          </div>
        </Link>
        <Link href="/pages/account">
          <div className="menu-item">
            <ManageAccounts className="menu-icon" />
            <span className="title">Account Setting</span>
          </div>
        </Link>
        <Divider textAlign="left">
          <Typography
            sx={{
              fontSize: "14px",
              color: "rgba(58, 53, 65, 0.38);",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            Pages
          </Typography>
        </Divider>
        <Link href="/login">
          <div className="menu-item">
            <LoginIcon className="menu-icon" />
            <span className="title">Login</span>
          </div>
        </Link>
        <Link href="/register">
          <div className="menu-item">
            <PersonAddIcon className="menu-icon" />
            <span className="title">Register</span>
          </div>
        </Link>
        <Divider textAlign="left">
          <Typography
            sx={{
              fontSize: "14px",
              color: "rgba(58, 53, 65, 0.38);",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            User Interface
          </Typography>
        </Divider>
        <div className="menu-item">
          <ErrorOutlineIcon className="menu-icon" />
          <span className="title">Errors</span>
        </div>
        <div className="menu-item">
          <TypeSpecimenIcon className="menu-icon" />
          <span className="title">Typography</span>
        </div>
        <div className="menu-item">
          <MoodIcon className="menu-icon" />
          <span className="title">Icons</span>
        </div>
        <div className="menu-item">
          <CreditCardIcon className="menu-icon" />
          <span className="title">Cards</span>
        </div>
        <div className="menu-item">
          <BackupTableIcon className="menu-icon" />
          <span className="title">Table</span>
        </div>
        <div className="menu-item">
          <CropSquareIcon className="menu-icon" />
          <span className="title">Form Layout</span>
        </div>
      </div>
    </Box>
  );
};

export default SideMenu;
