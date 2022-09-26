import { useEffect, useState } from 'react';
import { PokemonsIFcurrent } from '../models';
import  pokemons  from './getPokemons';
import loader from '../img/loader.png';

interface PokemonProps { pokemons: PokemonsIFcurrent }

function App(props: PokemonProps) {
  const [curentPokemon, setcurentPokemon] = useState(loader)
  useEffect(() => {
    if (props.pokemons.url !== `url`) pokemons(props.pokemons.url).then((res: any)=>{ setcurentPokemon(res.sprites.other.dream_world.front_default );
     })
  }, [props])
  const nameOfPokemon = props.pokemons.name.charAt(0).toUpperCase() + props.pokemons.name.slice(1)
  return (
    <div className="col">
        <p className='pokemonFont'> { nameOfPokemon }  </p>
        <div className='imgPoki' >
          <img alt={props.pokemons.name} className='imgPoki'  src={ curentPokemon }></img>
        </div>
    </div>
  );
}
export default App;
