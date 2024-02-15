import React from "react";
import { Card as MuiCard, CardContent, CardHeader, Typography, Divider, Button, Box } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import { Draggable } from "@hello-pangea/dnd";
import { useCardStore } from "../store/CardStore";


interface Card{
    title : string,
    status : string,
    description : string,
    id : string,
    index : number
}
export default function CardComponent({title, status, description, id, index} : Card) {
    const cardStore = useCardStore();
    const statusText = () =>{
        switch (status) {
            case "3":
                return "Completed";
            case "2":
                return "In Progress"
            case "1": 
                return"Not Started";
            default:
                break;
        }
    }

    const statusColor = () => {
        switch (status) {
            case "3":
                return "#14a900"
            case "2":
                return "#ffbf00"
            case "1": 
                return "#d90d19"
            default:
                break;
        }
    }
    
    const navigate = useNavigate();

    const handleRoute = (e : React.MouseEvent) =>{
        e.preventDefault();
        navigate(`/update/${id}`);
    }

    const deleteCard = (e : React.MouseEvent, id : string) => {
        let arr = cardStore.cards;
        arr = arr.filter(card=>card.id !== id)
        cardStore.setCards(arr);
    }
    return(
        <Draggable draggableId={id} index={index}>
            {(provided)=>(
                <MuiCard {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} sx={{width: {xs: "80%", sm: "400px", md:"300px"}, margin: "5px", border: "2px solid #27ebaf", backgroundColor: "black", padding: "0"}}>
                    <CardContent sx={{padding: 0, height: "100%", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
                        <CardHeader title={title} subheader={`Status: ${statusText()}`} subheaderTypographyProps={{color: statusColor}} titleTypographyProps={{variant: "h4", flexWrap:"nowrap", color: "#27ebaf"}} sx={{backgroundColor: "black", flexWrap: "nowrap"}}/>
                        <Divider sx={{marginBottom: "10px", color:"#27ebaf", background: "#27ebaf"}}/>
                        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                            <Typography alignItems={"center"} justifyContent="center" textAlign="center" color={"#27ebaf"}>{description}</Typography>
                            <Divider sx={{marginY: "10px", color:"#27ebaf", background: "#27ebaf"}}/>

                            <Box sx={{display: "flex", justifyContent: "space-between", padding: "5px"}}>
                                <NavLink to={`/update/${id}`}>
                                    <Button variant="contained" onClick={(e : React.MouseEvent)=>{handleRoute(e)}}>Update</Button>
                                </NavLink>
                                <Button variant="contained" sx={{backgroundColor: "#d90d19"}} onClick={(e : React.MouseEvent)=>{deleteCard(e, id)}}>Delete</Button>
                            </Box>
                        </Box>
                    </CardContent>
                </MuiCard>
            )}
            
        </Draggable>
        
    )
}