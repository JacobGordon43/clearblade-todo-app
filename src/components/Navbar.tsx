import { Box, Button, Typography } from "@mui/material";
import { BrowserRouter as Router} from 'react-router-dom';

export default function Navbar(){
    return(
        <Box sx={{display:"flex", width: "100%", backgroundColor: "black", alignItems: "center", justifyContent: "space-between"}}>
            <a href="/">
                <Typography color={"#27ebaf"} variant="h5" margin={"10px"} sx={{textDecoration: "none"}}>ClearBlade ToDo</Typography>
            </a>
            <Button variant="outlined" sx={{color: "#27ebaf", height: "40px", border: "1px solid #27ebaf", marginRight: "10px"}} href="/add">Add</Button>
        </Box>

    )
}
