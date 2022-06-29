import AppBar from '@mui/material/AppBar';
import React, {useState} from 'react';
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

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/vnd.api+json");
myHeaders.append("Authorization", "wTp5G2tv");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
  
 

function App() {
  const [adoptData, setAdoptData] = useState([]);
  return (
    <div className="App">
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid lightgray' }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Animals Inc
          </Typography>
          <Button 
            href="#" 
            variant="outlined" 
            sx={{ my: 1, mx: 1.5 }}
            onClick={() => {
            //   console.log("1 before fetch in App()", animalData, "---", Date.now());
              
          
            //   fetch("https://zoo-animal-api.herokuapp.com/animals/rand/9", requestOptions)
            //     .then(response => response.json())
            //     .then(result => {
            //       console.log("2 inside fetch", Date.now());
            //       console.log("3 special animals", result, "---", Date.now())
            //       setAnimalData(result)
            //     })
            //     .catch(error => console.log('error', error));
            
            //   console.log("4 after fetch", animalData, "---", Date.now());
              
            // 

            fetch("https://api.rescuegroups.org/v5/public/animals/search/available/dogs/", requestOptions)
            .then(response => response.text())
            .then(result => {
            console.log(result)
            setAdoptData(result)
            })
            .catch(error => console.log('error', error));
              console.log('inside on click', adoptData)
                }
                }
          >
            { console.log('ouside on click', adoptData)}
            New Animals
          </Button>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="md" sx={{ my: 4}}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2}}
        >
          Random Animals
        </Typography>
        <Typography 
          variant="h5" 
          align="center" 
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          Check Out Some Cool Animals!!!
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
            adoptData.map((animalDetails, index) =>
            <Grid
            item
            xs={12}
            md={4}
            key = {index}
          >
            <CharacterCard
            
            name = {animalDetails.data.attribute.name}
            
            // heroImage = {animalDetails.image_link}
            // sentence = {animalDetails.latin_name}
            
            // descriptionArray = {character.description}
            >
              
            </CharacterCard>
            { console.log('ouside on click bottom', adoptData)}
            </Grid>
            )
          }

    { console.log('ouside on click', adoptData)}
        </Grid>
          
      </Container>
      
    </div>
  );
}

export default App;
