import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "../store/stateSlice";
import { updateDropdownData } from "../store/dropdownSlice";
import { Box, Button, Backdrop, CircularProgress } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import EditIcon from "@mui/icons-material/Edit";
import SubRows from "./SubRows";

import DropDown from "./DropDown";

const Rows = ({ rowId, channel }) => {
  const dropdownData = useSelector((state) => state.dropdown);
  const { value } = useSelector((state) => state.step);
  const dispatch = useDispatch();
  const [clickedOnce, setClickedOnce] = useState(false);
  const [open, setOpen] = useState(false);
  const [showAdditionalComponent, setShowAdditionalComponent] = useState(false);
  const [clickCount, setclickCount] = useState(1);

  const handleButtonClick = (subrowId) => {
    setclickCount(clickCount + 1);
    dispatch(updateDropdownData({ rowId, subrowId }));
  };

  const handleExpand = (subrowId) => {
    setShowAdditionalComponent(!showAdditionalComponent);
    dispatch(updateDropdownData({ rowId, subrowId }));
    setClickedOnce(true);
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
              sx={{ width: "30%", display: "flex", justifyContent: "center" }}>
              <DropDown
                value={dropdownData[rowId][0].dropdown1} // Assuming dropdown1 is the ID of your first dropdown
                onChange={(data) => handleDropdownChange("dropdown1", data)}
                rowId={rowId}
                dropdownId={"dropdown1"}
              />
            </Box>
            <Box
              sx={{ width: "30%", display: "flex", justifyContent: "center" }}>
              <DropDown
                value={dropdownData[rowId][0].dropdown2} // Assuming dropdown2 is the ID of your second dropdown
                onChange={(data) => handleDropdownChange("dropdown2", data)}
                rowId={rowId}
                dropdownId={"dropdown2"}
              />
            </Box>
            <Box
              sx={{ width: "20%", display: "flex", justifyContent: "center" }}>
              {value < 2 ? (
                <Button
                  size="medium"
                  sx={{ fontSize: "12px", textTransform: "capitalize" }}
                  onClick={() => handleExpand(clickCount)}>
                  {showAdditionalComponent ? (
                    "Hide Backup Channel"
                  ) : (
                    <>
                      {clickCount > 1 ? (
                        `View backup channels(${clickCount})`
                      ) : clickedOnce ? (
                        `View backup channels(${clickCount})`
                      ) : (
                        <Button
                          size="medium"
                          sx={{ fontSize: "12px", textTransform: "capitalize" }}
                          startIcon={<AiOutlinePlus />}>
                          Add Backup Channel
                        </Button>
                      )}
                    </>
                  )}
                </Button>
              ) : (
                <Button
                  size="medium"
                  variant="outlined"
                  disabled={value > 2}
                  sx={{ fontSize: "12px", textTransform: "capitalize " }}
                  startIcon={<EditIcon />}
                  onClick={handleOpen}>
                  Edit Channel
                </Button>
              )}
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
              {Array.from({ length: clickCount }).map((_, index) => (
                <SubRows key={index} rowId={rowId} subrowId={index + 1} />
              ))}
              <Box sx={{ width: "60%", textAlign: "center" }}>
                <Button
                  size="medium"
                  sx={{ fontSize: "12px", textTransform: "capitalize " }}
                  startIcon={<AiOutlinePlus />}
                  onClick={() => handleButtonClick(clickCount + 1)}>
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
    )
  );
};

export default Rows;
