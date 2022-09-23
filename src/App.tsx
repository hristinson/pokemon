import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Pokemon from './component/Pokemon';
import  pokemons  from './component/getPokemons';

function App() {
  const [pokOpen, setPokOpen] = useState(null)

  useEffect(() => {
    pokemons().then((res)=>{ setPokOpen(res)})
  }, []
    );
  

  //console.log(pokOpen)

  return (
    <div className="App">
      <div>
      <Pokemon poki={ pokOpen }/>
      </div>
      <Button >Click ME</Button>
      
    </div>
  );
  
}


export default App;
