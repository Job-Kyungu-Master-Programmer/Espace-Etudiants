import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar className='appBar' position="static">
        <Toolbar className='toolbar'>
            <Box>
                <Button color="inherit" component={Link} to="/">
                     home
                </Button>
                <Button color="inherit" component={Link} to="/notes">
                    notes
                </Button>
                <Button color="inherit" component={Link} to="/users">
                    users
                </Button> 
            </Box> 
            <Box>
                <Button color="inherit" component={Link} to="/login">
                    Login
                </Button>  
                <Button color="inherit" component={Link} to="/signup">
                    Sign up
                </Button>  
            </Box>                        
        </Toolbar>
  </AppBar>
      );
}

export default Header