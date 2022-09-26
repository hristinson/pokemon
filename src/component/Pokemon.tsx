import React, { useEffect, useState }  from 'react';
import { PokemonsIF2 } from '../models';

interface PokemonProps {
  pokemons: PokemonsIF2
}

function App(props: PokemonProps) {

  return (
    <div className="border py-5 px-5 rounded flex fle-col items-center mb2">
        Pokemon { props.pokemons.name } is ready to fight! 
    </div>
  );
  
  
}
export default App;
