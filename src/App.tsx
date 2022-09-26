import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Pokemon from './component/Pokemon';
import { PokemonsIF } from './models';
import  pokemons  from './component/getPokemons';
import  { pokemonsData }  from './data/pokemons';


function App() {

  const [pokOpen, setPokOpen] = useState(pokemonsData)
  const [pokOfset, setPokOfset] = useState(0)
 
  // pokemons(pokOfset).then((res: PokemonsIF)=>{ console.log(pokOpen);
  //  })
    
  //console.log(pokOpen.results[0]);
  

  useEffect(() => { 

      pokemons(0).then( (res: PokemonsIF) => {setPokOpen(res)} )

   }, [])

     //pokemons(0).then( (res: PokemonsIF) => { console.log(res)  } } )
      
      
  useEffect(() => {
    pokemons(pokOfset).then((res: PokemonsIF)=>{ setPokOpen(res)})
 }, [pokOfset]);
 
  return (
    <div className="App">

    <Pokemon pokemons={  pokOpen.results[0] }></Pokemon>
    <Pokemon pokemons={  pokOpen.results[1] }></Pokemon>
    <Pokemon pokemons={  pokOpen.results[2] }></Pokemon>
    <Pokemon pokemons={  pokOpen.results[3] }></Pokemon>
    <Pokemon pokemons={  pokOpen.results[4] }></Pokemon>
    <Pokemon pokemons={  pokOpen.results[5] }></Pokemon>
    <Pokemon pokemons={  pokOpen.results[6] }></Pokemon>
    <Pokemon pokemons={  pokOpen.results[7] }></Pokemon>
    <Pokemon pokemons={  pokOpen.results[8] }></Pokemon>
    <Pokemon pokemons={  pokOpen.results[9] }></Pokemon>
    <Pokemon pokemons={  pokOpen.results[10] }></Pokemon>
    <Pokemon pokemons={  pokOpen.results[11] }></Pokemon>
    <Pokemon pokemons={  pokOpen.results[12] }></Pokemon>
    <Pokemon pokemons={  pokOpen.results[13] }></Pokemon>
    <Pokemon pokemons={  pokOpen.results[14] }></Pokemon>
    <Pokemon pokemons={  pokOpen.results[15] }></Pokemon>
    <Pokemon pokemons={  pokOpen.results[16] }></Pokemon>
    <Pokemon pokemons={  pokOpen.results[17] }></Pokemon>
    <Pokemon pokemons={  pokOpen.results[18] }></Pokemon>
    <Pokemon pokemons={  pokOpen.results[19] }></Pokemon>


     
     <Button onClick={(a)=>{ setPokOfset(19); }}>left</Button>
     <Button onClick={(a)=>{ setPokOfset(39); }}>right</Button>


    </div>
  );
  
}


export default App;
