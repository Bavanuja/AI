import React from 'react'
import {AppBar,Toolbar,Typography,Button,Box }from '@mui/material';
export default function Nav() {
  return (
    <AppBar>
      <Toolbar>
        
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
            Spendyze
          </Typography>
          <Button color="inherit">Component 1</Button>
          <Button color="inherit">Component 2</Button>
          <Button color="inherit">Component 3</Button>
        </Box>
        
        
        <Button color="inherit" variant="outlined" sx={{ marginRight: 1 }}>
          Visit App
        </Button>
        <Button color="inherit" variant="outlined">
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  )
}
