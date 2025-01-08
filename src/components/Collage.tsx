import './Collage.css'
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Rating,
  Stack,
  Typography,
 } from '@mui/material'

  function Collage() {
    return(
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
              <Rating defaultValue={1} max={7} />
            </CardActions>
          </Card>
          <Card>
            <CardContent>
              <Typography>
                This is card 2
              </Typography>
            </CardContent>
          </Card>
        </Stack>
    )
  }

export default Collage