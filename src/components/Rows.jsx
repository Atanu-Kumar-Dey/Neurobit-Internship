import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "../store/stateSlice";
import { updateDropdownData } from "../store/dropdownSlice";
import { Box, Button, Backdrop, CircularProgress, Paper } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import EditIcon from "@mui/icons-material/Edit";
import DropDown from "./DropDown";

const Rows = ({ rowId, channel }) => {
  const dropdownData = useSelector((state) => state.dropdown[rowId]);
  const { value } = useSelector((state) => state.step);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [showAdditionalComponent, setShowAdditionalComponent] = useState(false);

  const handleExpand = () => {
    setShowAdditionalComponent(!showAdditionalComponent);
  };
  const handleClose = () => {
    setOpen(false);
    previousState();
  };
  const handleOpen = () => {
    setOpen(true);
    setTimeout(handleClose, 1000);
  };

  const previousState = () => {
    dispatch(decrement());
  };

  const handleDropdownChange = (dropdownId, data) => {
    dispatch(updateDropdownData({ rowId, dropdownId, data }));
  };

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
          <Box sx={{ width: "30%", display: "flex", justifyContent: "center" }}>
            <DropDown
              value={dropdownData?.dropdown1} // Assuming dropdown1 is the ID of your first dropdown
              onChange={(data) => handleDropdownChange("dropdown1", data)}
            />
          </Box>
          <Box sx={{ width: "30%", display: "flex", justifyContent: "center" }}>
            <DropDown
              value={dropdownData?.dropdown2} // Assuming dropdown2 is the ID of your second dropdown
              onChange={(data) => handleDropdownChange("dropdown2", data)}
            />
          </Box>
          <Box sx={{ width: "20%", display: "flex", justifyContent: "center" }}>
            {value < 2 ? (
              <Button
                size="medium"
                sx={{ fontSize: "12px", textTransform: "capitalize" }}
                startIcon={<AiOutlinePlus />}
                onClick={handleExpand}>
                {showAdditionalComponent
                  ? "Hide Backup Channel"
                  : "Add Backup Channel"}
              </Button>
            ) : (
              <Button
                size="medium"
                variant="outlined"
                disabled={value > 2}
                sx={{ fontSize: "12px", textTransform: "capitalize " }}
                startIcon={<EditIcon />}
                onClick={handleOpen}>
                Edit backup channel
              </Button>
            )}
          </Box>
        </Box>
        {showAdditionalComponent && (
          <Box
            sx={{
              boxShadow: 2,
              overflow: "hidden",
              backgroundColor: "rgba(246, 246, 246, 1)",
            }}>
            {Array.from({ length: clickCount }).map((_, index) => (
              <SubRows key={index} rowId={index} />
            ))}
            <Box sx={{ width: "60%", textAlign: "center" }}>
              <Button
                size="medium"
                sx={{ fontSize: "12px", textTransform: "capitalize " }}
                startIcon={<AiOutlinePlus />}
                onClick={handleButtonClick}>
                Add Backup Channel
              </Button>
            </Box>
          </Box>
        )}
      </Box>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          display: "flex",
          flexDirection: "column",
        }}
        open={open}>
        <CircularProgress color="inherit" sx={{ mb: 2 }} />
        {value === 3 ? <p>Saving All Changes...</p> : null}
      </Backdrop>
    </div>
  );
};

export default Rows;
