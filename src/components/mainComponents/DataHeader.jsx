import { Box } from "@mui/material";
import React from "react";

const DataHeader = () => {
  return (
    <Box
      sx={{
        width: "95%",
        backgroundColor: "white",
        mx: "auto",
        py: 2,
        display:"flex",
        mb: 2,
        borderRadius: "8px",
        fontWeight:"500",
        alignItems:"center",
        justifyContent:"start",
        backgroundColor:"rgba(229, 243, 255, 1)"
      }}>
      <Box sx={{width:"20%",display:"flex",justifyContent:"center"}}>Channel</Box>
      <Box sx={{width:"30%",display:"flex",justifyContent:"center"}}>Primary Channel (default select)</Box>
      <Box sx={{width:"30%",display:"flex",justifyContent:"center"}}>Reference Channel (default N/A)</Box>
    </Box>
  );
};

export default DataHeader;
