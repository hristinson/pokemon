import { useEffect, useState } from 'react';
import { PokemonType, currentPokemon } from '../models';
import loader from '../img/loader.png';
import axios from 'axios';

interface PokemonProps { pokemons: PokemonType }

function App(pokemons: PokemonProps) {
  const [curentPokemon, setcurentPokemon] = useState(loader)
  useEffect(() => {
      axios.get<currentPokemon>(pokemons.pokemons.url).then((res)=>{ 
      setcurentPokemon(res.data.sprites.other.dream_world.front_default)
      }
        );
      }, [pokemons.pokemons.url])
  
  const nameOfPokemon = pokemons.pokemons.name.charAt(0).toUpperCase() + pokemons.pokemons.name.slice(1)
  return (
    <div className="col">
        <p className='pokemonFont'> { nameOfPokemon }  </p>
        <div className='imgPoki' >
          <img alt={pokemons.pokemons.name } className='imgPoki'  src={ curentPokemon }></img>
        </div>
    </div>
  );
}
export default App;
