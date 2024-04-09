import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 64px)",
        }}
      >
        <Box mb={2}>
          <Button variant="contained" component={Link} to="/merge">
            Merge
          </Button>
        </Box>
        <Button variant="contained" component={Link} to="/split">
          Split
        </Button>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
