import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import cardboard from '../assets/cupboard.gif';

function Cardboard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
      <img src={cardboard} alt="" style={{ width: "200px", height: "200px"}}/>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {/* <b>Yes Check in the cardboard.</b> */}
      </Typography>
      </CardContent>
    </Card>
    );
}


export default Cardboard;