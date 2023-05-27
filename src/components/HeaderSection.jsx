import React from "react";
import Box from "@mui/material/Box";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const HeaderSection = () => {
  const { value } = useSelector((state) => state.step);
  return (
    <>
      {value==3?(<Box display="flex" sx={{ p: 2, width: "100%" }}>
          <Box sx={{ width: "70%", fontWeight: "700", fontSize: "28px" }}>
            Test_Study
          </Box>
          
          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
            }}>
            <FaUserCircle color="#2CA9E3" size={24} />
            &nbsp;Atanu Kumar Dey
            <RiArrowDropDownLine size={20} />
          </Box>
        </Box>): (
        <Box display="flex" sx={{ p: 2, width: "100%" }}>
          <Box sx={{ width: "70%", fontWeight: "700", fontSize: "28px" }}>
            Test_Study
          </Box>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
            }}>
            <FaUserCircle color="#2CA9E3" size={24} />
            &nbsp;Atanu Kumar Dey
            <RiArrowDropDownLine size={20} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default HeaderSection;
