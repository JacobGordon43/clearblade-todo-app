import React, { ChangeEvent, useEffect, useState } from 'react';
import CardComponent from "../components/Card"
import { Box, Button, FormControlLabel, Grid, Menu, MenuItem, Radio, RadioGroup, TextField } from '@mui/material';
import { useCardStore } from '../store/CardStore';
import {DragDropContext, Droppable, DropResult} from '@hello-pangea/dnd'

export default function Home(){
  const cards = useCardStore((state)=>state.cards);
  const [search, setSearch] = useState("");
  const [statusView, setStatusView] = useState("0");
  const [dispalyedCards, setDisplayedCards] = useState(cards);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  //Use effect assists in rendering the view correctly when switching status views
  useEffect(()=>{
    const handleDisplayedCards = () =>{
      let arr = cards;
      if(statusView !== "0"){
        arr = arr.filter((card)=> card.status === statusView)
      }

      if(search !== ""){
        arr = arr.filter((card)=> 
          card.title.indexOf(search) >= 0)
      }
      setDisplayedCards(arr);
    }
    handleDisplayedCards();
  }, [cards, search, statusView, setAnchorEl]);

  //Used to save the new order of cards
  const onDragEnd = (result : DropResult) =>{
    if(!result.destination){
      return;
    }
    if(result.destination.droppableId === result.source.droppableId && result.destination.index === result.source.index){
      return;
    }

    const newItems = [...dispalyedCards];
    const [removed] = newItems.splice(result.source.index, 1)
    newItems.splice(result?.destination.index, 0, removed);
    setDisplayedCards(newItems)
  }

  const handleOpen = (e : React.MouseEvent<HTMLElement>) =>{
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () =>{
    setAnchorEl(null)
  }

  const FilterMenu = () =>{

    return(
      <Box sx={{display: {xs: "flex", md: "none"}, flexDirection:{xs:"column", sm:"row"}, justifyContent: "space-between", padding:"5px"}}>
        <Button id="dropdown-button" sx={{margin: "5px"}} aria-controls={open ? 'dropdown-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleOpen} variant='contained'>
          Status
        </Button>
        <Menu id='dropdown-menu' anchorEl={anchorEl} open={open} onClose={handleClose}         
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}>
          <MenuItem sx={{margin: "5px"}}>
            <RadioGroup defaultValue={statusView} sx={{display:"flex", flexDirection: "column", justifyContent: "center"}} onChange={(e: ChangeEvent<HTMLInputElement>)=>{setStatusView(e.target.value)}}>
                <FormControlLabel value={"0"} label="All" control={<Radio />}/>
                <FormControlLabel value={"1"} label="Not Started" control={<Radio />}/>
                <FormControlLabel value={"2"} label="In Progress" control={<Radio />}/>
                <FormControlLabel value={"3"} label="Completed" control={<Radio />}/>
              </RadioGroup>
          </MenuItem>
        </Menu>
        <TextField label="Title" value={search} onChange={(e : ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)}/>

      </Box>
    )

  }

    return(
      
      <Box width={"100%"}>
        <Box sx={{display: {xs: "none", md: "flex"}, justifyContent: "space-around", padding: "10px"}}>
          <RadioGroup defaultValue={"0"} sx={{display:"flex", flexDirection: "row", justifyContent: "center"}} onChange={(e: ChangeEvent<HTMLInputElement>)=>{setStatusView(e.target.value)}}>
            <FormControlLabel value={"0"} label="All" control={<Radio />}/>
            <FormControlLabel value={"1"} label="Not Started" control={<Radio />}/>
            <FormControlLabel value={"2"} label="In Progress" control={<Radio />}/>
            <FormControlLabel value={"3"} label="Completed" control={<Radio />}/>
          </RadioGroup>
          <TextField label="Title" value={search} onChange={(e : ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)}/>
        </Box>
        <FilterMenu />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='todo-grid'>
            {provided => (
              <Grid {...provided.droppableProps} {...provided.innerRef} ref={provided.innerRef} container className="App" sx={{width: "100%", display: "flex", flexDirection: {xs: "column", md: "row"}, marginTop: "10px", alignItems: "center"}} wrap='wrap'>
                {
                  dispalyedCards.map((card, index)=>{
                    return <CardComponent title={card.title} description={card.description} status={card.status} id={card.id} key={card.id} index={index}/>
                  })
                }
                {provided.placeholder}

              </Grid>
            )}
            {/* <Grid container className="App" sx={{width: "100%", display: "flex", flexDirection: {xs: "column", md: "row"}, marginTop: "10px"}} justifyContent={{xs: "center", md:'space-around'}} wrap='wrap'>
            
              {
                dispalyedCards.map(card=>{
                  return <CardComponent title={card.title} description={card.description} status={card.status} id={card.id} key={card.id}/>
                })
              }
            </Grid> */}
          </Droppable>
        
        </DragDropContext>

      </Box>

    )
  
  }
  