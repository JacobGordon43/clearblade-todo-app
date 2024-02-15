import React from "react";
import { Card as MuiCard, CardContent, CardHeader, Typography, Divider, Button } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";

interface Card{
    title : string,
    status : string,
    description : string,
    id : string
}
export default function CardComponent({title, status, description, id} : Card) {
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

    return(
        <MuiCard sx={{width: {xs: "80%", sm: "400px", md:"300px"}, margin: "5px auto", border: "2px solid #27ebaf", backgroundColor: "black"}}>
            <CardContent sx={{padding: 0, height: "100%", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
                <CardHeader title={title} subheader={`Status: ${statusText()}`} subheaderTypographyProps={{color: statusColor}} titleTypographyProps={{variant: "h4", color: "#27ebaf"}} sx={{backgroundColor: "black"}}/>
                <Divider sx={{marginBottom: "10px", color:"#27ebaf", background: "#27ebaf"}}/>
                <Typography alignItems={"center"} justifyContent="center" textAlign="center" color={"#27ebaf"}>{description}</Typography>
                <NavLink to={`/update/${id}`}>
                    <Button variant="contained" onClick={(e : React.MouseEvent)=>{handleRoute(e)}}>Update</Button>
                </NavLink>
            </CardContent>

        </MuiCard>
    )
}