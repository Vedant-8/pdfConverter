import React from "react";
import Paper from "@mui/material/Paper";

const Footer = () => {
  return (
    <Paper
      elevation={3}
      square
      sx={{
        position: "fixed",
        bgcolor: "lightblue",
        bottom: 0,
        width: "100%",
        height: "50px",
      }}
    ></Paper>
  );
};

export default Footer;
