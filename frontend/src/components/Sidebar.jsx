import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor={"left"} open={true}>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          bgcolor: "lightcyan",
        }}
      >
        <ListItem component={Link} to="/merge">
          <ListItemText primary="Merge" />
        </ListItem>
        <ListItem component={Link} to="/split">
          <ListItemText primary="Split" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
