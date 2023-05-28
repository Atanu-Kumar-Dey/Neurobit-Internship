import React from "react";
import { Box, Button } from "@mui/material";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import DropDown from "./DropDown";

const SubRows = ({ rowId }) => {
  const { value } = useSelector((state) => state.step);

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
        //   value={dropdownData?.dropdown1} // Assuming dropdown1 is the ID of your first dropdown
        //   onChange={(data) => handleDropdownChange("dropdown1", data)}
        />
      </Box>
      <Box sx={{ width: "30%", display: "flex", justifyContent: "center" }}>
        <DropDown
        //   value={dropdownData?.dropdown2} // Assuming dropdown2 is the ID of your second dropdown
        //   onChange={(data) => handleDropdownChange("dropdown2", data)}
        />
      </Box>
      <Box sx={{ width: "20%", display: "flex", justifyContent: "center" }}>
        <Button
          size="medium"
          color="error"
          sx={{ fontSize: "12px", textTransform: "capitalize" }}
          startIcon={<RiDeleteBin6Line />}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default SubRows;
