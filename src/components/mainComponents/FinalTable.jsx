import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Rows from "../Rows";
import FinalRow from "../FinalRow";

const FinalTable = () => {
  const {channels} = useSelector((state) => state.channelSlice);
  console.log(channels)
  return (
    <Box sx={{width:"95%",mx:"auto"}}>
     {
        channels.map((channel,index) =>(
          <FinalRow key={index} rowId={index} channel={channel} />
        ))
     }
    </Box>
  );
};

export default FinalTable;
