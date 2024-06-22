import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const SampleUse = () => {
    var[x,setX]=useState();
    const inp1=()=>{
        setX(" REACT")
    }
    const inp2=()=>{
        setX(" ANGULAR")
    }
    const inp3=()=>{
        setX(" NEXT")
    }
    useEffect(()=>{
        inp2();
    },[])
  return (
    <div>
        <br/><br/><br/>
        <Typography variant='h4'>WELCOME TO  {x} </Typography><br/><br/>
        <Button variant='contained' color='primary' onClick={inp1}>React</Button>&nbsp;&nbsp;
        <Button variant='contained' color='secondary' onClick={inp2}>Angular</Button>&nbsp;&nbsp;
        <Button variant='contained' color='inherit' onClick={inp3}>Next</Button>&nbsp;&nbsp;
    </div>
  )
}

export default SampleUse