import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Pokemon from './component/Pokemon';
import { PokemonResponse } from './models';
import axios from 'axios';

function App() {

  const [pokOfset, setPokOfset] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`)
  const [pokOpen, setPokOpen] = useState<PokemonResponse>({
    count: 0,
    next: null,
    previous: null,
    results: []
  })
  useEffect(() => {axios.get<PokemonResponse>(pokOfset).then((res)=>{ setPokOpen(res.data)})}, [pokOfset]);

  const previous = useCallback(() => {if(pokOpen.previous) setPokOfset(pokOpen.previous)}, [pokOpen])
  const next = useCallback(() => {if(pokOpen.next) setPokOfset(pokOpen.next)}, [pokOpen])


  return (
<div className="App">

{pokOpen.results.map((element, key) => <Pokemon pokemons={ element } key={key}></Pokemon> )}

<div>
  <div className="menu">
  <Button className="btn btn-success" onClick={()=>{ previous() }}> previous pokemons </Button>
   </div>
   <div className="menu">
  <Button className="btn btn-success" onClick={()=>{ next() }}> next pokemons </Button>
  </div>
  </div>
</div>

);
}

export default App;
