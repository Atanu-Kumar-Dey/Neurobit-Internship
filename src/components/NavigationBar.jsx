import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineFileAdd } from "react-icons/ai";
import IncrementNumberAnimation from "./IncrementNumberAnimation";
import { GiTwoCoins } from "react-icons/gi";

const drawerWidth = 240;

const navList = [
  {
    name: "Dashboard",
    icon: <RxDashboard size={20} />,
    style: { borderLeft: "5px solid #04273A" },
  },
  {
    name: "Montage",
    icon: <AiOutlineFileAdd size={20} />,
    style: { bgcolor: "#2ca9e340", borderLeft: "5px solid #2ca9e3" },
  },
  {
    name: "Credits",
    icon: <GiTwoCoins size={20} />,
    style: { borderLeft: "5px solid #04273A" },
  },
];

const NavigationBar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          backgroundColor: "#04273A",
        },
      }}
      variant="permanent"
      anchor="left">
      <Toolbar
        sx={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          fontSize: "20px",
          borderBottom: 2,
          borderColor: "rgba(79, 79, 79, 1)",
          mx: "10%",
        }}>
        React Test
      </Toolbar>
      <Divider />
      <List>
        {navList.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ my: 1 }}>
            <ListItemButton sx={item.style}>
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          mt: "60%",
          width: "200px",
          display: "flex",
          mx: "auto",
          height: "140px",
          borderRadius: "10px",
          backgroundColor: "#02354f",
          color: "#fff",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          fontSize: "12px",
        }}>
        <div style={{ fontSize: "22px" }}>
          <IncrementNumberAnimation limit={1650} />
          
        </div>
        Total credits avilable
      </Box>
    </Drawer>
  );
};

export default NavigationBar;
