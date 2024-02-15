import React, { ChangeEvent, useEffect, useState } from 'react';
import CardComponent from "../components/Card"
import { Box, FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material';
import { useCardStore } from '../store/CardStore';
export default function Home(){
  const cards = useCardStore((state)=>state.cards);
  const [statusView, setStatusView] = useState("0");
  const [dispalyedCards, setDisplayedHards] = useState(cards);


  //Use effect assists in rendering the view correctly when switching status views
  useEffect(()=>{
    const handleDisplayedCards = () =>{
      let arr = cards;
      if(statusView !== "0"){
        arr = arr.filter((card)=> card.status == statusView)
      }
      setDisplayedHards(arr);
    }
    handleDisplayedCards();
  }, [cards, statusView]);

    return(
      <Box width={"100%"}>
        <RadioGroup defaultValue={"0"} sx={{display:"flex", flexDirection: "row", justifyContent: "center"}} onChange={(e: ChangeEvent<HTMLInputElement>)=>{setStatusView(e.target.value)}}>
          <FormControlLabel value={"0"} label="All" control={<Radio />}/>
          <FormControlLabel value={"1"} label="Not Started" control={<Radio />}/>
          <FormControlLabel value={"2"} label="In Progress" control={<Radio />}/>
          <FormControlLabel value={"3"} label="Completed" control={<Radio />}/>
        </RadioGroup>
        <Grid container className="App" sx={{width: "100%", display: "flex", flexDirection: {xs: "column", md: "row"}, marginTop: "10px"}} justifyContent={{xs: "center", md:'space-around'}} wrap='wrap'>
          {
            dispalyedCards.map(card=>{
              return <CardComponent title={card.title} description={card.description} status={card.status} id={card.id} key={card.id}/>
            })
          }
        </Grid>
      </Box>

    )
  
  }
  