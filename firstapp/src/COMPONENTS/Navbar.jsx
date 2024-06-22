import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6'>MY APP</Typography>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='secondary'>
                    <Link to='/SignUp'>
                    SignUp</Link>
                    </Button>&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='success'>
                    <Link to='/'>
                    Login</Link>
                    </Button>&nbsp;
                    <Button variant='contained' color='warning'>
                    <Link to='/SB'>
                    State</Link>
                    </Button>&nbsp;
                    <Button variant='contained' color='warning'>
                    <Link to='/CNT'>
                    COUNT</Link>
                    </Button>&nbsp;
                    <Button variant='contained' color='success'>
                    <Link to='/LISTMAP'>
                    LISTMAP</Link>
                    </Button>&nbsp;
                    <Button variant='contained' color='success'>
                    <Link to='/api'>
                    API</Link>
                    </Button>&nbsp;
                    <Button variant='contained' color='success'>
                    <Link to='/SUSE'>
                    USEEFFECT</Link>
                    </Button>&nbsp;
                    <Button variant='contained' color='success'>
                    <Link to='/GTCRD'>
                    GETCARD</Link>
                    </Button>&nbsp;
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar