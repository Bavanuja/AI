import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Features', 'About', 'AI Consultation'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar sx={{ backgroundColor: 'white', color: '#000000', boxShadow: 'none' }}>
      <Toolbar>
        
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1,marginTop:'20px' }}>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ color: '#ffffff' }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h4"
            component="div"
            sx={{ color: '#5C3810 ', fontFamily: 'roboto',marginLeft:'50px'  }}
          >
            Spendyze
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 4 ,}}>
              <Button sx={{ color: '#000000', fontFamily: 'roboto','&:hover': {
        backgroundColor: '#864E22', // Change hover color to gold
        color: '#FFFFFF', // Change text color on hover
      }, }}>About</Button>
              <Button sx={{marginLeft: 2 , color: '#000000', fontFamily: 'roboto','&:hover': {
        backgroundColor: '#864E22', // Change hover color to gold
        color: '#FFFFFF', // Change text color on hover
      }, }}>Features</Button>
              <Button sx={{ marginLeft: 2 ,color: '#000000', fontFamily: 'roboto' ,'&:hover': {
        backgroundColor: '#864E22', // Change hover color to gold
        color: '#FFFFFF', // Change text color on hover
      },}}>AI Consultation</Button>
            </Box>
          )}
        </Box>

        {/* Right side: Visit App (always visible) */}
        <Box sx={{ display: 'flex', alignItems: 'center',marginTop:'30px' }}>
          <Button
            
            variant="contained"
            sx={{ backgroundColor: '#864E22', // Gold color
              color: '#ffffff',
              padding: '10px 35px', // Make the button big and long
              fontSize: '1.1rem',
              fontFamily: 'Roboto',
              '&:hover': {
                backgroundColor: '#864E22', // Slightly darker gold on hover
              },
            }}
          >
            Visit App
          </Button>
        </Box>
      </Toolbar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </AppBar>
  );
}
