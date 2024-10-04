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
        {/* Left side: Hamburger menu (on mobile) and Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ color: '#000000' }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h4"
            component="div"
            sx={{ marginLeft: isMobile ? 1 : 0, color: '#FFD700', fontFamily: 'roboto',marginLeft:'50px'  }}
          >
            Spendyze
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 2 }}>
              <Button sx={{ color: '#000000', fontFamily: 'roboto' }}>Features</Button>
              <Button sx={{ color: '#000000', fontFamily: 'roboto' }}>About</Button>
              <Button sx={{ color: '#000000', fontFamily: 'roboto' }}>AI Consultation</Button>
            </Box>
          )}
        </Box>

        {/* Right side: Visit App (always visible) */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            color="black"
            variant="contained"
            sx={{ borderColor: '#000000', color: '#000000', marginRight:'20px' }}
          >
            Visit App
          </Button>
          <Button
              color="#FFD700"
              variant="contained"
              sx={{ borderColor: '#000000', color: '#000000',marginRight:'50px' }}
            >
              Sign In
            </Button>
        </Box>
      </Toolbar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </AppBar>
  );
}
