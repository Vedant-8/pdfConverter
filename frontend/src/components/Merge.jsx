import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Merge = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Container>
        <Box ml={240}>Merge</Box>
      </Container>
      <Footer />
    </>
  );
};

export default Merge;
