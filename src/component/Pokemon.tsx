import { useEffect, useState } from 'react';
import { PokemonType, currentPokemon } from '../models';
import loader from '../img/loader.png';
import axios from 'axios';

//interface PokemonProps { pokemons: PokemonType }

function App({name, url}: PokemonType) {
  const [curentPokemon, setcurentPokemon] = useState(loader)
  useEffect(() => {
      axios.get<currentPokemon>(url).then((res)=>{ 
      setcurentPokemon(res.data.sprites.other.dream_world.front_default)
      }
        );
      }, [url])
  
  const nameOfPokemon = name.charAt(0).toUpperCase() + name.slice(1)
  return (
    <div className="col">
        <p className='pokemonFont'> { nameOfPokemon }  </p>
        <div className='imgPoki' >
          <img alt={name } className='imgPoki'  src={ curentPokemon }></img>
        </div>
    </div>
  );
}
export default App;
