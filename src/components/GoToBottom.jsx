import React from 'react'
import Fab from '@mui/material/Fab';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { animateScroll as scroll } from 'react-scroll';

const scrollToBottom = () => {
    scroll.scrollToBottom({
      duration: 1500,
      smooth: 'easeInOutQuart',
    });
  };

const GoToBottom = () => {
  return (
    <div style={{position:"fixed",zIndex: 199,bottom:"10%",right:"2%"}} >
      <Fab size="medium" color="primary" aria-label="add" onClick={scrollToBottom}>
        <ArrowDownwardIcon />
      </Fab>
    </div>
  )
}

export default GoToBottom
