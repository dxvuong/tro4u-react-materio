import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./page.scss";
import SideMenu from "../sideMenu/page";
import { ModalProps } from "../../../../model/data";

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

export default function MenuMobile ({open, close} : ModalProps)  {
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


