import { Box, Button, Typography } from "@mui/material";
import { NavLink } from 'react-router-dom';

export default function Navbar(){
    return(
        <Box sx={{display:"flex", width: "100%", backgroundColor: "black", alignItems: "center", justifyContent: "space-between"}}>
            <NavLink to={"/"}>
                <Typography color={"#27ebaf"} variant="h5" margin={"10px"} sx={{textDecoration: "none"}}>ClearBlade ToDo</Typography>
            </NavLink>
            <NavLink to={"/add"}>
                <Button variant="outlined" sx={{color: "#27ebaf", height: "40px", border: "1px solid #27ebaf", marginRight: "10px"}} href="/add">Add</Button>
            </NavLink>
        </Box>

    )
}
