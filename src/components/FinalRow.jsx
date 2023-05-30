import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "../store/stateSlice";
import { updateDropdownData } from "../store/dropdownSlice";
import { Box, Button, Backdrop, CircularProgress } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import EditIcon from "@mui/icons-material/Edit";
import SubRows from "./Subrows.jsx";
import { addSubRow } from "../store/jsonDataSlice";
import DropDown from "./DropDown";
import FinalSubRow from "./FinalSubRow";

const FinalRow = ({ rowId, subrowId = 0, channel }) => {
  const { channels } = useSelector((state) => state.jsonData);
  const { value } = useSelector((state) => state.step);

  return (
    <div>
      <Box sx={{ mb: 3 }}>
        <Box
          sx={{
            width: "100%",
            minHeight: "80px",
            backgroundColor: "white",
            display: "flex",
            boxShadow: 2,
            alignItems: "center",
          }}
          key={rowId}>
          <Box
            sx={{
              width: "20%",
              display: "flex",
              justifyContent: "center",
              fontWeight: "500",
            }}>
            {channel}
          </Box>
          <Box
            fontSize={16}
            fontWeight={500}
            sx={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
            }}>
            {localStorage.getItem(`dropdown_${rowId}_${subrowId}_dropdown1`) ? (
              localStorage
                .getItem(`dropdown_${rowId}_${subrowId}_dropdown1`)
                .slice(1, -1)
            ) : (
              <Box
                label="Null"
                disabled
                fontSize={16}
                fontWeight={500}
                sx={{ color: "#C0C0C0" }}>
                Null
              </Box>
            )}
          </Box>
          <Box
            fontSize={16}
            fontWeight={500}
            sx={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
            }}>
            {localStorage.getItem(`dropdown_${rowId}_${subrowId}_dropdown2`) ? (
              localStorage
                .getItem(`dropdown_${rowId}_${subrowId}_dropdown2`)
                .slice(1, -1)
            ) : (
              <Box
                label="Null"
                disabled
                fontSize={16}
                fontWeight={500}
                sx={{ color: "#C0C0C0" }}>
                Null
              </Box>
            )}
          </Box>
          <Box sx={{ width: "20%", display: "flex", justifyContent: "center" }}>
            <Button
              size="medium"
              variant="outlined"
              disabled
              sx={{ fontSize: "12px", textTransform: "capitalize " }}
              startIcon={<EditIcon />}>
              Edit Channel
            </Button>
          </Box>
        </Box>
        {typeof channels[rowId] !== "string" && (
          <Box
            sx={{
              boxShadow: 2,
              py: 2,
              overflow: "hidden",
              backgroundColor: "rgba(246, 246, 246, 1)",
            }}>
            {channels[rowId].map((_, index) => (
              <FinalSubRow key={index} rowId={rowId} subrowId={index + 1} />
            ))}
          </Box>
        )}
      </Box>
    </div>
  );
};

export default FinalRow;
