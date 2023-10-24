"use client"
import React, { useState } from "react";

import { pink } from "@mui/material/colors";
import Radio from "@mui/material/Radio";

const RadioCustom = () => {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  return (
    <div>
      <Radio {...controlProps("b")} color="secondary" />
    </div>
  );
};

export default RadioCustom;
