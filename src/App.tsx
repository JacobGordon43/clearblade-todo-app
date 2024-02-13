import React from 'react';
import './App.css';
import CardComponent from './components/Card';
import { Box, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import AddTodo from './pages/AddTodo';

function App() {
  return (
    <Router>
      <Box>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/add' Component={AddTodo} />

        </Routes>
      </Box>

    </Router>
  );
}

export default App;
