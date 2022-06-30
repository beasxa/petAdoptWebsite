import AppBar from '@mui/material/AppBar';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './App.css';
import CharacterCard from './CharacterCard';
import characters from './protagonists.json'
import MultiActionAreaCard from './adoptAnimalCard';
import { blueGrey } from '@mui/material/colors';

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/vnd.api+json");
myHeaders.append("Authorization", "wTp5G2tv");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

// useEffect=(() => {
//   fetch("https://api.rescuegroups.org/v5/public/animals/search/available/dogs/", requestOptions)
//     .then(response => response.json())
//     .then(result => {
//       console.log("note for print--------------", result)
//       setAdoptData(result.data)
//     })
//     .catch(error => console.log('error', error))
// }, []
// )



function App() {

  const [adoptData, setAdoptData] = useState([]);

  useEffect(() => {
    fetch("https://api.rescuegroups.org/v5/public/animals/search/available/dogs/", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log("note for print--------------", result);
        setAdoptData(result.data);
      })
      .catch(error => console.log('error', error));
  }, []
  )

  console.log('new line print', adoptData)
  return ( 
    <div className="App" style={{backgroundColor: 'aliceblue'}}>
      <CssBaseline />
      <AppBar
        position="static"
        // color="default" 
        style={{backgroundColor: 'steelblue'}}
        elevation={0}
        sx={{ borderBottom: '1px solid white' }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Powered by: RescueAnimals
          </Typography>
          <Button
            href="#"
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
            onClick={() => alert("give the doggos boops...")
            }
            
          >
            secret message...
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2 }}
        >
          Animals in Need of Homes
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="lg">
        <Grid container
          spacing={5}
          justifyContent="center"
          alignItems="flex-start"
        >
          {
            adoptData.map((animalDetail) => {
              return <Grid
                item
                xs={12}
                md={3}
              >
                <MultiActionAreaCard
                  name={animalDetail.attributes.name} // this is all data, infinity
                  img={animalDetail.attributes.pictureThumbnailUrl}
                  breedPrimary={animalDetail.attributes.breedPrimary}
                  sizeGroup={animalDetail.attributes.sizeGroup}
                  sex={animalDetail.attributes.sex}
                  url={animalDetail.attributes.url}
                  vaccine={animalDetail.attributes.isCurrentVaccinations}

                />
              </Grid>
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
