import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import DropDown from "./DropDown";
import { removeDropdownData, updateDropdownData } from "../store/dropdownSlice";
import { removeSubRow } from "../store/jsonDataSlice";

const FinalSubRow = ({ rowId, subrowId }) => {
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
        {localStorage.getItem(`dropdown_${rowId}_${subrowId}_dropdown1`) || (
          <Box
            label="Null"
            disabled
            fontSize={20}
            fontWeight={500}
            sx={{ color: "#C0C0C0" }}>
            Null
          </Box>
        )}
      </Box>
      <Box sx={{ width: "30%", display: "flex", justifyContent: "center" }}>
        {localStorage.getItem(`dropdown_${rowId}_${subrowId}_dropdown2`) || (
          <Box
            label="Null"
            disabled
            fontSize={20}
            fontWeight={500}
            sx={{ color: "#C0C0C0" }}>
            Null
          </Box>
        )}
      </Box>
      <Box
        sx={{ width: "20%", display: "flex", justifyContent: "center" }}></Box>
    </Box>
  );
};

export default FinalSubRow;
