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

const FinalRow = ({ rowId,subrowId=0, channel }) => {
  const dropdownData = useSelector((state) => state.dropdown);
  const { channels } = useSelector((state) => state.jsonData);
  const [addChannel, setAddChannel] = useState(0);
  const { value } = useSelector((state) => state.step);
  const [showAdditionalComponent, setShowAdditionalComponent] = useState(false);
  const [clickCount, setclickCount] = useState(1);

  useEffect(() => {
    if (typeof channels[rowId] === "string" || channels[rowId].length === 0) {
      setAddChannel(0);
    } else {
      setAddChannel(channels[rowId].length);
    }
    if (addChannel > 0 && value == 2) {
      setShowAdditionalComponent(true);
    }
  }, [value, addChannel, setAddChannel]);


  return (
    dropdownData[rowId] && (
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
              sx={{
                width: "30%",
                display: "flex",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: "400",
              }}>
              {localStorage.getItem(
                `dropdown_${rowId}_${subrowId}_dropdown1`.replace('"', "")
              ) || (
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
              sx={{
                width: "30%",
                display: "flex",
                justifyContent: "center",
              }}>
              {localStorage.getItem(
                `dropdown_${rowId}_${subrowId}_dropdown2`.replace('"', "")
              ) || (
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
              sx={{ width: "20%", display: "flex", justifyContent: "center" }}>
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
          {showAdditionalComponent && (
            <Box
              sx={{
                boxShadow: 2,
                py: 2,
                overflow: "hidden",
                backgroundColor: "rgba(246, 246, 246, 1)",
              }}>
              {channels[rowId].map((_, index) => (
                <SubRows key={index} rowId={rowId} subrowId={index + 1} />
              ))}
              
            </Box>
          )}
        </Box>
        
      </div>
    )
  );
};

export default FinalRow;
