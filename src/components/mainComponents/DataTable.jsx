import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Rows from "../Rows";

const MapChannel = () => {
  const { channels } = useSelector((state) => state.jsonData);
  
  return (
    <div>
      <Box sx={{ width: "95%", mx: "auto" }}>
        {channels.map((option, index) => (
          <Rows divId={index} key={index} channel={option}/>
        ))}
      </Box>
    </div>
  );
};

export default MapChannel;