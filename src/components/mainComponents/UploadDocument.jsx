import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import upload from "../../assets/upload.gif";

const UploadDocument = () => {
  return (
    <Box
      sx={{
        width: "95%",
        height: 345,
        mx: "auto",
        backgroundColor: "white",
        mb:3,
        p: 2,
        borderRadius: "8px",
      }}>
      <Box
        sx={{
          borderStyle: "dashed",
          borderWidth: "2px",
          borderColor: "#C4C4C4",
          width: "100%",
          height: "100%",
          backgroundColor: "#F8F8F8",
          borderRadius: "5.43px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Box>
          <img src={upload} alt="upload document" />
        </Box>
        <Box sx={{ fontSize: "13px", fontWeight: "bold" }}>
          <Button
            sx={{
              border: "1px",
              px: 3,
              fontSize: "18px",
              textTransform: "capitalize",
              borderStyle: "solid",
              borderColor: "#6D6D6D",
              color: "#6D6D6D",
              fontFamily: "DM Sans",
              mb: 1,
            }}>
            Browse Files
          </Button>
          <br />
          <Box sx={{ mx: "15px" }}>&nbsp;or drop files here</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UploadDocument;
