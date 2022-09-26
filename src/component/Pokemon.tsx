import { useEffect, useState } from 'react';
import { PokemonsIF2 } from '../models';
import  pokemons  from './getPokemons';

interface PokemonProps { pokemons: PokemonsIF2 }

function App(props: PokemonProps) {

  const [curentPokemon, setcurentPokemon] = useState(``)
  
  useEffect(() => {
    if (props.pokemons.url !== `url`) pokemons(props.pokemons.url).then((res: any)=>{ setcurentPokemon(res.sprites.other.dream_world.front_default );
     })
  }, [props])

  return (
    <div className="border py-5 px-5 rounded flex fle-col items-center mb2">
        Pokemon { props.pokemons.name } is ready to fight!  
        <div className='imgPoki' >
          <img alt={props.pokemons.name} className='imgPoki'  src={ curentPokemon }></img>
        </div>
    </div>
  );
  
}
export default App;
