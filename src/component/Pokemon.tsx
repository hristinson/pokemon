import { useEffect, useState } from 'react';
import { PokemonType, currentPokemon } from '../models';
import loader from '../img/loader.png';
import axios from 'axios';

interface PokemonProps { pokemons: PokemonType }

function App(props: PokemonProps) {
  const [curentPokemon, setcurentPokemon] = useState(loader)
  useEffect(() => {
    if (props.pokemons.url !== `url`) axios.get<currentPokemon>(props.pokemons.url).then((res)=>{ 
      setcurentPokemon(res.data.sprites.other.dream_world.front_default)
      }
        );
      }, [props.pokemons.url])
  
  const nameOfPokemon = props.pokemons.name.charAt(0).toUpperCase() + props.pokemons.name.slice(1)
  return (
    <div className="col">
        <p className='pokemonFont'> { nameOfPokemon }  </p>
        <div className='imgPoki' >
          <img alt={props.pokemons.name } className='imgPoki'  src={ curentPokemon }></img>
        </div>
    </div>
  );
}
export default App;
