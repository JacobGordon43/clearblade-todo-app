import React, { ChangeEvent, useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCardStore } from '../store/CardStore';
import { v4 } from "uuid"

export default function AddTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("0");
    const [error, setError] = useState(false);
    const id = v4();
    const navigate = useNavigate();
    const store = useCardStore();
    const cards = useCardStore((state)=>state.cards);
    //const addCards = useCardStore((state)=>state.addCard({id, title, description, status}))
    const styles = () => {
        return {margin: "5px"}
    }
    
    const handleSubmit = () =>{
        console.log(`Status: ${status}, title: ${title}, description: ${description}`);
        //Checks if any of the fields are empty, preventing the application from submitting if they are and setting an error mesage
        if(title === '' || status === '0' || description === ''){
            setError(true)
            return
        }
        setError(false)
        console.log(cards)
        cards.push({id, title, description, status})
        //Adds it to the store and then returns home
        store.setCards(cards)
        navigate("/")
    }
    //Using MUI Form components to create a form for 
    return(
        <FormControl sx={{justifyContent: "center", textAlign: "center", width: "80%", maxWidth: "500px", margin: "20px"}}>
            {error && 
            <Box height={"100px"} sx={{display: "flex", alignItems: "center", backgroundColor: "#d90d19", borderRadius: "10px"}}>
                <Typography variant='h6' sx={{padding: "10px"}}>Looks like you forgot to fill out one of the fields, please fill out each field to add to your todo list</Typography>
            </Box>}
            <Typography variant='h3' fontWeight={"700"}>Create a new card</Typography>
            <TextField label="Title" required sx={styles} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget?.value)}/>
            <TextField multiline label="Description" required sx={styles} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setDescription(e.currentTarget?.value)}/>
            <InputLabel id="status-select-label" >Status</InputLabel>
            <Select labelId='status-select-label' id="status-select" defaultValue='0' label={"Status"} required sx={styles} onChange={(e : SelectChangeEvent) => setStatus(e.target.value as string)}>
                <MenuItem value="0">Select Status</MenuItem>
                <MenuItem value={"1"}>Not Started</MenuItem>
                <MenuItem value={"2"}>In Progress</MenuItem>
                <MenuItem value={"3"}>Completed</MenuItem>
            </Select>
            <Button type='submit' variant='contained' onClick={()=>{handleSubmit()}}>Create</Button>
        </FormControl>

    )
  }
