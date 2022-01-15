import './App.css';
import React from 'react';
import Card from './Components/Card';
import NavBar from './Components/NavBar';
import ScreenWrapper from './Components/ScreenWrapper';

function App() {
  return (
    <div className = "App">
      <NavBar />
      <ScreenWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScreenWrapper>
    </div>
  );
}

export default App;
