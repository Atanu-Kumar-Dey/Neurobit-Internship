import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import Rows from "../Rows";
import { updateDropdownData } from "../../store/dropdownSlice";

const MapChannel = () => {
  const { channels } = useSelector((state) => state.channelSlice);
  const dropdownData = useSelector((state) => state.dropdown);

  
  const dispatch = useDispatch();
  for (let i = 0; i < 11; i++) {
    useEffect(() => {
      async function setFirstRow() {
        dispatch(updateDropdownData({ rowId: i }));
      }

      setFirstRow();
    }, [i]);
  }

  useEffect(() => {
    const localStorageEntries = Object.entries(localStorage);
    {
      localStorageEntries.map(([key, value])=>{
        // console.log(key,value)
      })
    }
  },[dropdownData]);

  return (
    <div>
      <Box sx={{ width: "95%", mx: "auto" }}>
        {channels.map((channel, index1) => {
          return <Rows rowId={index1} key={index1} channel={channel} />;
        })}
      </Box>
    </div>
  );
};

export default MapChannel;
