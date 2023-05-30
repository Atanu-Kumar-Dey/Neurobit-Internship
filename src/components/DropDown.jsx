import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const dumyOptions = [
  { name: "C2" },
  { name: "C1" },
  { name: "C3" },
  { name: "C4" },
  { name: "C5" },
  { name: "C6" },
  { name: "C7" },
  { name: "C8" },
  { name: "C9" },
  { name: "C10" },
  { name: "C11" },
];

const DropDown = ({ value, onChange, rowId = 0, subrowId = 0, dropdownId }) => {
  const SELECT_VALUE_KEY = `dropdown_${rowId}_${subrowId}_${dropdownId}`;

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    localStorage.setItem(SELECT_VALUE_KEY, JSON.stringify(selectedValue));
    onChange(selectedValue);
  };

  useEffect(() => {
    const lastSelected = JSON.parse(
      localStorage.getItem(SELECT_VALUE_KEY) ?? "[]"
    );
    onChange(lastSelected);
  }, [rowId, subrowId, dropdownId]);

  return (
    <FormControl sx={{ m: 1, minWidth: 230, m: 1 }} size="small">
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
        {dumyOptions.map((option) => (
          <MenuItem key={option.name} value= {option.name}>
             {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;
