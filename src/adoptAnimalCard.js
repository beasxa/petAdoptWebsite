import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={props.img}
          alt="DogImg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Dog Breed: {props.breedPrimary}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Dog Size: {props.sizeGroup}
          </Typography>
          {props.vaccine ? 
          <Typography variant="body2" color="text.secondary">
            Current on vaccinations </Typography>
            : null}
          <Typography variant="body2" color="text.secondary">
            {props.sex}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {console.log("url", props.url)}
        {props.url ? 
             <Button size="large" color="primary" href={props.url}>
            {props.name}'s Page </Button>
            : null } 
      </CardActions>
    </Card>
  );
}
