import React from "react";
import { Card, CardHeader, Typography } from "@mui/material";
interface Card{
    title : string,
    status : string,
    text : string
}
export default function CardComponent({title, status, text} : Card) {
    return(
        <Card>
            <CardHeader>
                <Typography>Title{title}</Typography>
                </CardHeader>
        </Card>
    )
}