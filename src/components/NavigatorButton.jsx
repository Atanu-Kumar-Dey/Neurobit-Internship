import React, { useState } from "react";
import { Box, Button, Tooltip } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./../store/stateSlice";

const NavigatorButton = () => {
  const value = useSelector((state) => state.step.value);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    nextState();
  };
  const handleOpen = () => {
    setOpen(true);
    setTimeout(handleClose, 1000);
  };

  const previousState = () => {
    dispatch(decrement());
  };
  const resetState = () => {
    dispatch(reset());
  };
  const nextState = () => {
    dispatch(increment());
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          px: 2,
          py: 2,
          bgcolor: "white",
        }}>
        <Box sx={{ width: "90%", ml: 2 }}>
          <Button
            variant="outlined"
            disabled={value === 0 || value === 3}
            onClick={previousState}>
            Back
          </Button>
          <Tooltip  title="Reset all settings">
            <Button
              disabled={value < 2 || value > 2}
              sx={{ textTransform: "lowercase", fontSize: "13", ml: 1 }}
              onClick={resetState}>
              Cancel montage
            </Button>
          </Tooltip>
        </Box>
        <Box>
          <div onClick={handleOpen}>
            {value >= 2 ? (
              <Button disabled={value >= 3} variant="contained" color="success">
                Save
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={{ backgroundColor: "#2F7EC7" }}>
                Next
              </Button>
            )}
          </div>
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
        </Box>
      </Box>
    </Box>
  );
};

export default NavigatorButton;
