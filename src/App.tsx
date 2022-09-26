import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Pokemon from './component/Pokemon';
import { PokemonsIF } from './models';
import  pokemons  from './component/getPokemons';
import  { pokemonsData }  from './data/pokemons';

// interface ProductProps {
//   product: PokemonsIF
// }

function App() {

  // const test: PokemonsIF = {
  //   name: `Samael`,
  //   url: `http://github.com`
  // }

  const [pokOpen, setPokOpen] = useState(pokemonsData)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    //console.log(pokOpen[0])
     pokemons().then((res)=>{ setPokOpen(res)})
  
  }, []);
  

  
  return (
    <div className="App">
     {counter}
     <Pokemon dataPoki={pokOpen[0]} ></Pokemon>
     <Pokemon dataPoki={pokOpen[1]} ></Pokemon>
     <Pokemon dataPoki={pokOpen[3]} ></Pokemon>
     <Pokemon dataPoki={pokOpen[4]} ></Pokemon>
     <Pokemon dataPoki={pokOpen[5]} ></Pokemon>
     <Pokemon dataPoki={pokOpen[6]} ></Pokemon>
     
     <Button onClick={(a)=>{ setCounter(counter+1); 
     
      }}>Click me</Button>
    </div>
  );
  
}


export default App;
