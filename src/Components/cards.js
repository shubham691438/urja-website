import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MyCard(props) {
  console.log(props.Name);

  return (
    <Card sx={{ width: "calc(20% - 20px)", margin: '10px', height: 'auto', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea>
        <div style={{ position: 'relative', paddingTop: '100%' }}>
          <CardMedia
            component="img"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            image={props.img}
            alt="green iguana"
          />
        </div>
        <CardContent style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>
            {props.Name}
          </Typography>
          <Typography variant="body2" sx={{
            fontFamily: 'Chicle, cursive', // Use the "Chicle" font family
            fontSize: '1.5rem', // Adjust the font size as needed
            fontWeight: 'bold', // Adjust the font weight as needed
            color: '#f57542', // Adjust the text color as needed
            textAlign: 'center',
          }}>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
