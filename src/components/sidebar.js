import React from 'react';
import { useState } from 'react';
import { Grid, Typography, Button, Stack, Box } from '@mui/material'


function Sidebar() {

  const [size, setSize]= useState(200);
  const [ text, setText] = useState('small size')

  function handleSmallSize(){
      setSize(200)
  }
  function handleMediumSize(){
      setSize( size === 200 ? 300 : 200 )
      setText ( text === 'small size' ? 'medium size' : ' ')
      
  }
  
  function handleLargeSize(){
    setSize( size === 300 ? 400 : 200 )
    setText ( text === 'medium size' ? 'large size' : ' ')

  }
  function handleExtraLarge(){
    setSize( size === 400 ? 500 : 200 )
    setText ( text === 'large size' ? 'extra large size' : ' ')
  }
  return (
    <Grid container  backgroundColor="black">
      <Grid item lg={3}>
        <Grid container lg={12} height="100vh"  backgroundColor="red" justifyContent= "center" alignItems= "center">
            <Stack direction="column">
              <Button height="200px" variant='primary' onClick={handleSmallSize}>small size</Button>
              <Button height="300px" variant='primary' onClick={handleMediumSize}>medium size</Button>
              <Button height="400px" variant='primary' onClick={handleLargeSize}>large size</Button>
              <Button height="500px" variant='primary' onClick={handleExtraLarge}>extra large size</Button>
            </Stack>
        </Grid>
      </Grid>

      <Grid item lg={9}>
        <Grid container lg={12} height="100vh"  backgroundColor="yellow" justifyContent="center" alignItems="center">
            <Box height={size} width={size} backgroundColor="white" textAlign="center">
              <Typography>{text}</Typography>
            </Box>
        </Grid>
      </Grid>
    </Grid> 
    );
}


export default Sidebar