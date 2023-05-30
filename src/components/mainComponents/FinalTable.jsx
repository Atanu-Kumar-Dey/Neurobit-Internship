import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Rows from "../Rows";
import FinalRow from "../FinalRow";

const FinalTable = () => {
  const { channels } = useSelector((state) => state.jsonData);
  const localStorageKeys = Object.keys(localStorage);

  console.log(JSON.parse(localStorage.getItem('dropdown_8_0_dropdown1')));
  return (
    <div>
      <ul>
        {/* <FinalRow/> */}
      </ul>
    </div>
  );
};

export default FinalTable;
