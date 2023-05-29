import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import Rows from "../Rows";
import { updateDropdownData } from "../../store/dropdownSlice";


const MapChannel = () => {
  const { channels } = useSelector((state) => state.jsonData);
  const [index, setIndex] = useState(0);
  const dispatch=useDispatch();
  for(let i=0;i<11;i++){
    useEffect(()=>{
      async function setFirstRow(){
        console.log(channels.length)
       
        dispatch(updateDropdownData({rowId:i}))
      
     
        }
  
     setFirstRow()
  
      
      },[i])
  }


  
  return (
    <div>
      <Box sx={{ width: "95%", mx: "auto" }}>
        {channels.map((option, index1) => {
        return  <Rows  rowId={index1} key={index1} channel={option}/>
       
        }
      
        )
    
        }
      </Box>
    </div>
  );
};

export default MapChannel;
