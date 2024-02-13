import React from 'react';
import { FormControl, TextField } from '@mui/material';

export default function AddTodo() {
    return(
        <FormControl sx={{margin: "20px"}}>
            <TextField label="Title" />
        </FormControl>
    )
  }
