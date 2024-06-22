import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
        <br/><br/>
        <Typography variant='h3'>Login</Typography><br/><br/><br/>
        <TextField  label="UserName" variant="outlined" /><br/><br/>
        <TextField  label="Password" variant="outlined" /><br/><br/>
        <Button variant="contained">Login</Button>

    </div>
  )
}

export default Register