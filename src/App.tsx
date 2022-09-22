import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';

  type User = {
    id: number;
    email: string;
    first_name: string;
  };
  
  type GetUsersResponse = {
    data: User[];
  };
  
  async function getUsers() {
    const off = 0;
    const url: string = `https://pokeapi.co/api/v2/pokemon/?offset=${off}&limit=20`;
    try {

      const { data, status } = await axios.get<GetUsersResponse>(url, {headers: {Accept: 'application/json', },}, );
      console.log(data);
      console.log(status);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

function App() {

  return (
    <div className="App">
      <Button onClick={()=>{getUsers()}}>Click ME</Button>
    </div>
  );
}

export default App;
