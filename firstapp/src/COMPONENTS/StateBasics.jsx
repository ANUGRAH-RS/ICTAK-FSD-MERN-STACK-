import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[fname,setFname]=useState("Anugrah")
    var[val,setval]=useState()

    const submithandler=()=>{
        setFname(val)
    }
    const handleinput=(e)=>{
        console.log(e.target.value)
        setval(e.target.value)
    }
  return (
    <div>
        <br/><br/>
        <Typography variant='h4'>Welcome {fname}</Typography><br/><br/>
        <TextField  label="Type Your Name" variant="outlined" onChange={handleinput}/><br/><br/>
        <Button variant="contained" onClick={submithandler}>SUBMIT</Button>
    </div>
  )
}

export default StateBasics