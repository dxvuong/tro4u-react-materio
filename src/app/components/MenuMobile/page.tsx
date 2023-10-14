import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./page.scss";
import SideMenu from "../sideMenu/page";

interface MenuMobileProps {
  open: boolean;
  close: () => void;
  
}

const style = {
  position: "absolute" as "absolute",
  top: 0,
  left: "28%",
  transform: "translate(-50%, -50%)",
  width: 230,
  border: "none",
  boxShadow: 24,
  padding: "10px"
};

export default function MenuMobile({ open, close }: MenuMobileProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SideMenu />
        </Box>
      </Modal>
    </div>
  );
}
