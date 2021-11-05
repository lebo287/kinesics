import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Good from "../assets/good.gif";

function Images() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <img src={Good} alt="" style={{ width: "200px", height: "200px" }} />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {/* <b>I am good.</b> */}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Images;
