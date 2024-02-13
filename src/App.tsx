import React from 'react';
import './App.css';
import CardComponent from './components/card';

function App() {
  return (
    <div className="App">
      <CardComponent title="test" text='Testing the card' status="In Progress"/>
    </div>
  );
}

export default App;
