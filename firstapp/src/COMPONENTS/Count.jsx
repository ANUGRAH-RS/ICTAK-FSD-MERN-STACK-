import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Count = () => {
    var[count,setCount]=useState(0)
    const Add=()=>{
        console.log("Add button clicked")
        setCount(count+1)

    }
    const sub=()=>{
        console.log("Add button clicked")
        setCount(count-1)
    }
  return (
    <div>
         <Typography variant='h4'>Count:{count} </Typography><br/><br/>
        <Button variant="contained" onClick={Add}>+</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="contained" onClick={sub}>-</Button>

    </div>
  )
}

export default Count