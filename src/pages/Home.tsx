import React from 'react';
import CardComponent from "../components/Card"
import { Grid } from '@mui/material';

export default function Home(){
    return(
      <Grid container className="App" sx={{flexDirection: {xs: "column", md: "row"}, marginTop: "10px"}} justifyContent={'space-around'} wrap='wrap'>
        <CardComponent title="Groceries" text='Go to Frys and purchase apples, pears, and pasta' status="Not Started"/>
        <CardComponent title="Trash" text='Take out trash' status="In Progress"/>
        <CardComponent title="test" text='Testing the card' status="Completed"/>
        <CardComponent title="test" text='Testing the card' status="Not Started"/>
  
      </Grid>
    )
  
  }
  