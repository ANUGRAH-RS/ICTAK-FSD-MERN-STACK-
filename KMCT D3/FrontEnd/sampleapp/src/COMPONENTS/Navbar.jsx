import React from 'react'
import App from '../App'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
          <Toolbar>
          <Typography variant='h6'>MY APP</Typography>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant='contained' color='secondary'>
                    <Link to='/add'>
                    ADD</Link>
                    </Button>&nbsp;&nbsp;&nbsp;
                    <Button variant='contained' color='success'>
                    <Link to='/view'>
                    VIEW</Link>
                    </Button>&nbsp;&nbsp;&nbsp;

            </Toolbar>  
        </AppBar>
    </div>
  )
}

export default Navbar