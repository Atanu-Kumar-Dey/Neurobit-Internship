import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const dumyOptions = [
  {
    name: "C1",
  },
  {
    name: "C2",
  },
  {
    name: "C3",
  },
  {
    name: "C4",
  },
  {
    name: "C5",
  },
  {
    name: "C6",
  },
  {
    name: "C7",
  },
  {
    name: "C8",
  },
  {
    name: "C9",
  },
  {
    name: "C10",
  },
  {
    name: "C11",
  },
];

const DropDown = ({ value, onChange }) => {
  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <FormControl
      sx={{ m: 1, minWidth: 230, m: 1 }}
      size="small"
      disabled={value > 2}>
      <Select
        value={value || ""}
        onChange={handleDropdownChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}>
        <MenuItem value="">
          <span style={{ fontSize: "13px", fontWeight: "400" }}>
            Select Channel
          </span>
        </MenuItem>
        {
          dumyOptions.map((option, index) => (
            <MenuItem key={index} value={`option${index+1}`}>
              {option.name}
              </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
};

export default DropDown;
