import React from 'react'
import Nav from './components/nav'
import About from './components/about'
import { Box } from '@mui/material';
import Feature from './components/feature';
import AI from './components/ai';
import Message from './components/message';
import Contact from './components/contact';

export default function App() {
  return (
    <Box sx={{ paddingTop: '64px' }}> 
      <Nav />
      <About />
      <Feature />
      <AI />
      <Message />
      <Contact />
    </Box>
  )
}
