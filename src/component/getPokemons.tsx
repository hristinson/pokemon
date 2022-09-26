import axios from 'axios';

    async function  pokemons(url: string) {
           
    try {
     return await axios.get(url, {headers: {Accept: 
      'application/json', },}, ).then((res)=>{
        return res.data;  
      });
      
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        
      } else {
        console.log('unexpected error: ', error);
        
      }
    }
  }

  export default pokemons