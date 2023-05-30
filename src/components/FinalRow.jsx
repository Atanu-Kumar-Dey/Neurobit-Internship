import React from 'react';
import { Typography, Box } from '@mui/material';

const FinalRow = () => {
  return (
    <div className={classes.root}>
      <Box container spacing={2}>
        <Box item xs={3}>
          <Paper className={classes.paper}>Value</Paper>
        </Box>
        <Box item xs={3}>
          <Paper className={classes.paper}>
            Sub-Div 1
          </Paper>
          <Paper className={classes.paper}>
            Sub-Div 2
          </Paper>
          <Paper className={classes.paper}>
            Sub-Div 3
          </Paper>
          <Paper className={classes.paper}>
            Sub-Div 4
          </Paper>
          <Paper className={classes.paper}>
            Sub-Div 5
          </Paper>
          <Paper className={classes.paper}>
            Sub-Div 6
          </Paper>
        </Box>
        <Box item xs={3}>
          <Paper className={classes.paper}>
            Sub-Div 1
          </Paper>
          <Paper className={classes.paper}>
            Sub-Div 2
          </Paper>
          <Paper className={classes.paper}>
            Sub-Div 3
          </Paper>
          <Paper className={classes.paper}>
            Sub-Div 4
          </Paper>
          <Paper className={classes.paper}>
            Sub-Div 5
          </Paper>
          <Paper className={classes.paper}>
            Sub-Div 6
          </Paper>
        </Box>
        <Box item xs={3}>
          <Paper className={classes.paper}>Value</Paper>
        </Box>
      </Box>
    </div>
  );
};

export default FinalRow;