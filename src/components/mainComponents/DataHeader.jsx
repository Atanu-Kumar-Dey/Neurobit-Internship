import { Box } from "@mui/material";
import React from "react";

const DataHeader = () => {
  return (
    <Box
      sx={{
        width: "95%",
        backgroundColor: "white",
        mx: "auto",
        p: 2,
        display:"flex",
        mb: "8px",
        borderRadius: "8px",
        fontWeight:"500",
        alignItems:"center",
        justifyContent:"start",
        backgroundColor:"rgba(229, 243, 255, 1)"
      }}>
      <Box sx={{width:"20%",pl:3}}>Channel</Box>
      <Box sx={{width:"30%",pr:2}}>Primary Channel (default select)</Box>
      <Box sx={{width:"30%"}}>Reference Channel (default N/A)</Box>
    </Box>
  );
};

export default DataHeader;
