import React from "react";
import Box from "@mui/material/Box";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VerifiedIcon from "@mui/icons-material/Verified";
import { AlertTitle } from "@mui/material";


const HeaderSection = () => {
  const [open, setOpen] = React.useState(true);
  const { value } = useSelector((state) => state.step);
  return (
    <>
      {value == 3 ? (
        <Box display="flex"  sx={{width: "100%",justifyContent:"space-between" }}>
          <Box sx={{p:2, fontWeight: "700", fontSize: "28px" }}>
            Test_Study
          </Box>
          <div style={{position:"fixed",zIndex: 199,right:"30%"}}>
            <Collapse in={open}>
              <Alert
                severity="success"
                sx={{backgroundColor:"rgba(241, 255, 247, 1)"}}
                icon={<VerifiedIcon />}
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}>
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                >
                <AlertTitle sx={{color:"rgba(16, 164, 75, 1)",fontSize:"16px"}}>Success</AlertTitle>
                <span style={{fontSize:"14px"}}> Channels configured successfully. </span>
              </Alert>
            </Collapse>
          </div>

          <Box
            sx={{
              p:2,
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
            }}>
            <FaUserCircle color="#2CA9E3" size={24} />
            &nbsp;Atanu Kumar Dey
            <RiArrowDropDownLine size={20} />
          </Box>
        </Box>
      ) : (
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
