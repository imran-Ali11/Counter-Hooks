import React from 'react';
import './App.css';
import MyComponent from './componenthook.jsx'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>INCREAMENT HOOK </h1>
        <MyComponent /> 
      </header>
      <MyComponent /> 
    </div>
  );
}

export default App;
