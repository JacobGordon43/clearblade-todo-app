import React from 'react';
import './App.css';
import { Box, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import AddTodo from './pages/AddTodo';
import UpdateTodo from './pages/UpdateTodo';

function App() {
  return (
    <Router>
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center", width: "100%"}}>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/add' Component={AddTodo} />
          <Route path='/update/:id' Component={UpdateTodo} />

        </Routes>
      </Box>

    </Router>
  );
}

export default App;
