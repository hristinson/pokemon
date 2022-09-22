import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';

  // let offSet = 0;
  // const url: string = `https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=20`;
  // async function (){}

  type User = {
    id: number;
    email: string;
    first_name: string;
  };
  
  type GetUsersResponse = {
    data: User[];
  };
  
  async function getUsers() {
    try {
      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.get<GetUsersResponse>(
        'https://reqres.in/api/users',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
  
      console.log(JSON.stringify(data, null, 4));
  
      // 👇️ "response status is: 200"
      console.log('response status is: ', status);
  
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
