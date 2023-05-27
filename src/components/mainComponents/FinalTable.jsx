import React,{useState} from "react";
import DropDown from "../DropDown";
import { useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

const FinalTable = () => {
  const { channels } = useSelector((state) => state.jsonData);
  
  return (
    <div>
      <Box sx={{ width: "95%", mx: "auto" }}>
        {channels.map((option, index) => (
          <Box
            sx={{
              width: "100%",
              minHeight: "70px",
              backgroundColor: "white",
              mb: 1,
              display: "flex",
              alignItems: "center",
              borderRadius: "8px",
            }}>
            <Box
              sx={{ width: "20%", display: "flex", justifyContent: "center" }}>
              {option}
            </Box>
            <Box
              sx={{ width: "30%", display: "flex", justifyContent: "center" }}>
              <DropDown index={index} />
            </Box>
            <Box
              sx={{ width: "30%", display: "flex", justifyContent: "center" }}>
              <DropDown index={index} />
            </Box>
            <Box
              sx={{ width: "20%", display: "flex", justifyContent: "center" }}>
              <Button size="medium" disabled variant="outlined" sx={{fontSize:"12px",textTransform:"capitalize "}} startIcon={<EditIcon/>}>Edit backup channel</Button>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default FinalTable;
