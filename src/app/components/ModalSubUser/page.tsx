import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import avatar from "../../../../public/assets/img/1.png"
import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Slide,
} from "@mui/material";
import {
  Cloud,
  ContentCopy,
  ContentCut,
  ContentPaste,
} from "@mui/icons-material";
import Image from "next/image";
import "./page.scss"
interface ModalSubUserProp {
  open: boolean;
  close: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "22%",
  left: "85%",
  transform: "translate(-50%, -50%)",
  width: 230,
  
  border: "none",
  boxShadow: 24,
};

export default function ModalSubUser({ open, close }: ModalSubUserProp) {
  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <div className="info">
            <div className="left">
              <Image src={avatar}alt="avatar" className="avatar"/>
            </div>
            <div className="right">
              <span className="name">John Doe</span>
              <div className="role">Admin</div>
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
  );
}
