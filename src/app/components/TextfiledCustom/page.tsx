import { TextField, styled } from "@mui/material";
import React from "react";
import { themes } from "../themes/theme";
import "./page.scss"

// const StyledTextField = styled(Te)

const TextFieldCustom = () => {
  const textfield = {
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
    "& .MuiOutlinedInput-root:hover": {
      "& fieldset": {
        borderColor: "#9155fd",
      },
    },
  };
  const handleOnchangeInputSearch = () => {
    
  }
  return (
    <TextField
      id="outlined-basic"
      label="Tìm kiếm"
      variant="outlined"
      className="textField-container"
      sx={textfield}
      onChange={handleOnchangeInputSearch}
      fullWidth
      // color={themes.palette.primary.main}
    />
  );
};

export default TextFieldCustom;
