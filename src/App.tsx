import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Pokemon from './component/Pokemon';
import  pokemons  from './component/getPokemons';

function App() {

  return (
    <div className="App">
      <div>
      <Pokemon poki={ pokemons() }/>
      </div>
      <Button onClick={()=>{pokemons().then((a)=>{console.log(pokemons())})}} >Click ME</Button>
    </div>
  );
}

export default App;
