import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { any } from 'prop-types';


function App() {

  const [main, setMaint ] = useState({})
  const [off, setOff ] = useState(0)
  

  type Pokemon = {
    id: number;
    email: string;
    first_name: string;
  };
  
  type GetUsersResponse = {
    data: Pokemon[];
  };
  
  async function getUsers(off: number) {
   
    const url: string = `https://pokeapi.co/api/v2/pokemon/?offset=${off}&limit=20`;
    try {

      //const { data, status } = 
      await axios.get<GetUsersResponse>(url, {headers: {Accept: 'application/json', },}, ).then((res)=>{
        console.log(res.data);
        setMaint(main => {return 0})
      });
     

      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        
      } else {
        console.log('unexpected error: ', error);
        
      }
    }
  }






  return (
    <div className="App">
      <div>
      {  }
      </div>
      

      <Button onClick={()=>{getUsers(0)}}>Click ME</Button>
      
    </div>
  );
  
  console.log(main)

}

export default App;
