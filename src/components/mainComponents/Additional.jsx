import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useSelector } from "react-redux";

const AdditionalContent = () => {
  const {  optionals } = useSelector((state) => state.jsonData);

  const [arr, setArr] = useState([]);
  return (
    <Box
      sx={{
        background: "white",
        borderRadius: "8px",
        mb: "5px",
        width: "95%",
        mx: "auto",
        lineHeight: "40px",
        display: "flex",
        py: 1,
        px: 2,
      }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}>
        <Box>Additional Settings</Box>

        <Box>
          <FormControlLabel
            control={<Checkbox defaultChecked={optionals[0].optional1} />}
            label=" optional1"
          />
        </Box>
        <Box>
          <FormControlLabel
            control={<Checkbox defaultChecked={optionals[0].optional2} />}
            label="optional2"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default AdditionalContent;
