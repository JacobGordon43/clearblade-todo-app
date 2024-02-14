import React from "react";
import { Card as MuiCard, CardContent, CardHeader, Typography, Divider, Button } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import UpdateTodo from "../pages/UpdateTodo";
import Home from "../pages/Home";
interface Card{
    title : string,
    status : string,
    description : string
}
export default function CardComponent({title, status, description} : Card) {
    const statusColor = () =>{
        switch (status) {
            case "Completed":
                return "#14a900"
            case "In Progress":
                return "#ffbf00"
            case "Not Started": 
                return "#d90d19"
            default:
                break;
        }
    }
    const navigate = useNavigate();

    const handleRoute = (e : React.MouseEvent) =>{
        // e.preventDefault();
        navigate(`/update/${title}/${description}/${status}`);
    }

    return(
        <MuiCard sx={{width: {xs: "80%", sm: "400px", md:"300px"}, margin: "5px auto", border: "2px solid #27ebaf", backgroundColor: "black"}}>
            <CardContent sx={{padding: 0, height: "100%", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
                <CardHeader title={title} subheader={`Status: ${status}`} subheaderTypographyProps={{color: statusColor}} titleTypographyProps={{variant: "h4", color: "#27ebaf"}} sx={{backgroundColor: "black"}}/>
                <Divider sx={{marginBottom: "10px", color:"#27ebaf", background: "#27ebaf"}}/>
                <Typography alignItems={"center"} justifyContent="center" textAlign="center" color={"#27ebaf"}>{description}</Typography>
                <Button variant="contained" onClick={(e : React.MouseEvent)=>{handleRoute(e)}}>Update</Button>
            </CardContent>

        </MuiCard>
    )
}