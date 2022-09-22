import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';


function App() {

  //const [main: JSON, setMain ] = useState(null)
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

      const { data, status } = await axios.get<GetUsersResponse>(url, {headers: {Accept: 'application/json', },}, );
      console.log(data);
      console.log(status);

      //return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        //console.log('error message: ', error.message);
        //return error.message;
      } else {
        console.log('unexpected error: ', error);
        //return 'An unexpected error occurred';
      }
    }
  }






  return (
    <div className="App">
      <div>
      {off}
      </div>
      

      <Button onClick={()=>{getUsers(0)}}>Click ME</Button>
      
    </div>
  );
}

export default App;
