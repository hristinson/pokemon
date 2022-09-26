import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Pokemon from './component/Pokemon';
import { PokemonsIF } from './models';
import  pokemons  from './component/getPokemons';
import  { pokemonsData }  from './data/pokemons';

function App() {

  const [pokOpen, setPokOpen] = useState(pokemonsData)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
     pokemons().then((res: PokemonsIF[])=>{ setPokOpen(res)})
  }, []);
  
  
  return (
    <div className="App">
     {counter}
     <Pokemon pokemons={pokOpen[0]} ></Pokemon>
     <Pokemon pokemons={pokOpen[1]} ></Pokemon>
     <Pokemon pokemons={pokOpen[2]} ></Pokemon>
     <Pokemon pokemons={pokOpen[3]} ></Pokemon>
     <Pokemon pokemons={pokOpen[4]} ></Pokemon>
     <Pokemon pokemons={pokOpen[5]} ></Pokemon>
     <Pokemon pokemons={pokOpen[6]} ></Pokemon>
     
     <Button onClick={(a)=>{ setCounter(counter+1); 
    
      }}>Click me</Button>
    </div>
  );
  
}


export default App;
