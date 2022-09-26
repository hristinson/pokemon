import React, { useEffect, useState }  from 'react';
import { PokemonsIF } from '../models';

interface PokemonProps {
  pokemons: PokemonsIF
}

function App(props: any) {

  //const [propsState, setPropsState] = useState(0)

 
  // useEffect(() => {
  //   //console.log(props)
  //   setPropsState(p => propsState+1)
  // },[]);

  //console.log(props.dataPoki.name);
  

  return (
    <div className="border py-5 px-5 rounded flex fle-col items-center mb2">
        Pokemon {props.dataPoki.name} is ready to fight!
        
            </div>
  );
  
  
}
export default App;
