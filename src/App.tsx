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

  // const [pokOpen, setPokOpen] = useState({})
  // const [counter, setCounter] = useState(0)

  // useEffect(() => {
  //   //console.log(`init`)
  //    pokemons().then((res: ProductProps)=>{ setPokOpen(res)})
  
  // }, [counter] );
  

  // console.log(pokOpen)

  return (
    <div className="App">
     
     <Pokemon dataPoki={ pokemonsData[0] } />
     <Pokemon dataPoki={ pokemonsData[1] } />
     




    </div>
  );
  
}


export default App;
