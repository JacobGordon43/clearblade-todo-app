import React from 'react';
import CardComponent from "../components/Card"
import { Grid } from '@mui/material';

export default function Home(){
    return(
      <Grid container className="App" sx={{width: "100%", display: "flex", flexDirection: {xs: "column", md: "row"}, marginTop: "10px"}} justifyContent={{xs: "center", md:'space-around'}} wrap='wrap'>
        <CardComponent title="Groceries" description='Go to Frys and purchase apples, pears, and pasta' status="Not Started"/>
        <CardComponent title="Trash" description='Take out trash' status="In Progress"/>
        <CardComponent title="test" description='Testing the card' status="Completed"/>
        <CardComponent title="test" description='Testing the card' status="Not Started"/>
  
      </Grid>
    )
  
  }
  