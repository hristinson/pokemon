import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Pokemon from './component/Pokemon';
import  pokemons  from './component/getPokemons';

function App() {

  const pokOpen = pokemons()
  .then((res)=>{return res})

  return (
    <div className="App">
      <div>
      <Pokemon poki={ pokemons() }/>
      </div>
      <Button onClick={
        ()=>{console.log(pokOpen)}
        } >Click ME</Button>
    </div>
  );
}

export default App;
