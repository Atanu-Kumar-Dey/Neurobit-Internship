import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useSelector } from "react-redux";

const AdditionalContent = () => {
  const { optionals } = useSelector((state) => state.jsonData);
  const { value } = useSelector((state) => state.step);
  return (
    <Box
      sx={{
        background: "white",
        borderRadius: "8px",
        mb: 2,
        boxShadow: 2,
        width: "95%",
        mx: "auto",
        lineHeight: "50px",
        display: "flex",
        py: 1,
        px: 2,
      }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}>
        <Box>Additional Settings</Box>

        <Box>
          {value < 3 ? (
            <FormControlLabel
              control={<Checkbox defaultChecked={optionals[0].optional1} />}
              label=" Artifacts"
            />
          ) : (
            <Box fontSize={16} fontWeight={500} sx={{ color: " #71706E " }}>
              Artifacts
            </Box>
          )}
        </Box>
        <Box>
          {value < 3 ? (
            <FormControlLabel
              control={<Checkbox defaultChecked={optionals[0].optional2} />}
              label=" Spindle"
            />
          ) : <Box fontSize={16} fontWeight={500} sx={{color: " #71706E " }}>
          Spindle
        </Box>}
        </Box>
      </Stack>
    </Box>
  );
};

export default AdditionalContent;
