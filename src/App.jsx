import React,{useEffect} from "react";
import { Box, CssBaseline } from "@mui/material";
import NavigationBar from "./components/NavigationBar";
import Montage from "./components/Montage";
import Schema from "./assets/schema.json";
import { useDispatch } from "react-redux";
import { setData } from "./store/jsonDataSlice";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      if(localStorage.getItem("channels")){
        const data = JSON.parse(localStorage.getItem("channels"));
        dispatch(setData({channels:data,optionals:Schema.optionals}));
      }
      else{
        dispatch(setData(Schema));
        localStorage.setItem("channels",JSON.stringify(Schema.channels));
      }
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavigationBar />
      <Box
        sx={{
          backgroundColor: "rgba(245, 246, 250, 1)",
          minHeight: "100vh",
          width: "100%",
        }}>
        <Montage />
      </Box>
    </Box>
  );
};

export default App;
