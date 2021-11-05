// MyComponent.js
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Work from '../assets/work.gif'


function Images() {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <img src={Work} alt="" style={{ width: "200px", height: "200px" }}/>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {/* <b>Okay, I need to go back to work. Have a great day.</b> */}
      </Typography>
      </CardContent>
    </Card>
    
  );
}

export default Images;