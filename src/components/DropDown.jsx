import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
export default function DropDown({index}) {
  const [option, setOption] = React.useState("");
  const {value} = useSelector((state)=>state.step)
  const handleChange = (event) => {
    setOption(event.target.value);
    console.log(index)
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
      sx={{ m: 1, minWidth: 230,m:1}}
      size="small"
      disabled={value>2} >
      <Select
        value={option}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}>
        <MenuItem value="">
          <span style={{fontSize:"13px",fontWeight:"400"}}>Select Channel</span> 
        </MenuItem>
        {dumyOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
