import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDown() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const dumyOptions = [
    {
      value: "10",
      name: "C1",
    },
    {
      value: "20",
      name: "C2",
    },
    {
      value: "30",
      name: "C3",
    },
    {
      value: "40",
      name: "C4",
    },
    {
      value: "50",
      name: "C5",
    },
    {
      value: "60",
      name: "C6",
    },
    {
      value: "70",
      name: "C7",
    },
    {
      value: "80",
      name: "C8",
    },
    {
      value: "90",
      name: "C9",
    },
    {
      value: "100",
      name: "C10",
    },
    {
      value: "110",
      name: "C11",
    },
  ];

  return (
    <FormControl
      sx={{ m: 1, minWidth: 200, backgroundColor: "white" }}
      size="small">
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
