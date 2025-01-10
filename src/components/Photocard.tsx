
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Rating,
 } from '@mui/material'

const Photocard = (score, setScore) => {


    return (
        <Card sx={{maxWidth: 225}}>
          <CardHeader
            title="Apple"
          />
          <CardMedia
            component="img"
            height="225"
            image='/apple2.jpg'
          />
          <CardActions>
            <Rating max={7} value={score} onChange={(event, newValue) => {if(newValue) setScore(newValue);}} />
          </CardActions>
        </Card>
    );
};

export default Photocard