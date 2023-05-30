import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const dumyOptions = [
  { value: "option1", name: "C1" },
  { value: "option2", name: "C2" },
  { value: "option3", name: "C3" },
  { value: "option4", name: "C4" },
  { value: "option5", name: "C5" },
  { value: "option6", name: "C6" },
  { value: "option7", name: "C7" },
  { value: "option8", name: "C8" },
  { value: "option9", name: "C9" },
  { value: "option10", name: "C10" },
  { value: "option11", name: "C11" },
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
          <MenuItem key={option.value} value= {option.value}>
             {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;
