import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Resultslist } from './components/ResultsList';


function App() {
  return (
    <div className="App">
      <Header></Header>
     <Main></Main>
     
    </div>
  );
}

export default App;
