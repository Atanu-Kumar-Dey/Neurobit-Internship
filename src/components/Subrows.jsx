import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import DropDown from "./DropDown";
import { updateDropdownData } from "../store/dropdownSlice";

const SubRows = ({ rowId, subrowId }) => {
  const dropdownData = useSelector((state) => state.dropdown);

  
  const dispatch = useDispatch();

  const handleDropdownChange = (dropdownId, data) => {
    dispatch(updateDropdownData({ rowId, dropdownId, subrowId, data }));
  };


  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "80px",
        display: "flex",
        alignItems: "center",
      }}>
      <Box
        sx={{
          width: "20%",
          display: "flex",
          justifyContent: "center",
          fontWeight: "500",
        }}></Box>
      <Box sx={{ width: "30%", display: "flex", justifyContent: "center" }}>
        <DropDown
          value={dropdownData[rowId][subrowId]?.dropdown1} // Assuming dropdown1 is the ID of your first dropdown
          onChange={(data) => handleDropdownChange("dropdown1", data)}
        />
      </Box>
      <Box sx={{ width: "30%", display: "flex", justifyContent: "center" }}>
        <DropDown
          value={dropdownData[rowId][subrowId]?.dropdown2} // Assuming dropdown1 is the ID of your first dropdown
          onChange={(data) => handleDropdownChange("dropdown2", data)}
        />
      </Box>
      <Box sx={{ width: "20%", display: "flex", justifyContent: "center" }}>
        <Button
          size="medium"
          color="error"
          sx={{ fontSize: "12px", textTransform: "capitalize" }}
          startIcon={<RiDeleteBin6Line />}
          // onClick={handleDelete}
          >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default SubRows;
