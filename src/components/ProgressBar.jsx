import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useSelector } from "react-redux";

const steps = ["Upload EDF's", "Map Channels", "Save & Preview"];

const ProgressBar = () => {
  const {value} = useSelector((state)=>state.step)
  
  return (
    <>
      <Box
        sx={{
          width: "95%",
          backgroundColor: "white",
          mx: "auto",
          p: 2,
          boxShadow: 1,
          mb: "12px",
          borderRadius: "8px",
        }}>
        <Stepper activeStep={value}  alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      
    </>
  );
};

export default ProgressBar;
