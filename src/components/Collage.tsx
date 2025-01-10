import { useState } from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Rating,
  Stack,
  Typography,
 } from '@mui/material'
import Photocard from './Photocard';

function Collage() {

  const [score, setScore] = useState(0);

  const handleClick = () => {
    console.log(score)
  };

  return(
    <>
      <Stack spacing={2}>
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
        <Card>
          <CardContent>
            <Typography>
              This is card 2. Score = {score}
            </Typography>
          </CardContent>
        </Card>
        <Photocard score={score} setScore={setScore}/>
      </Stack>
      <Button onClick={ handleClick }>
        Save
      </Button>
    </>
  )
}

export default Collage