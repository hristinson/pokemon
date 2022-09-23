import axios from 'axios';

    async function  pokemons() {
    const off = 0;
    const url: string = 
    `https://pokeapi.co/api/v2/pokemon/?offset=${off}&limit=20`;
    try {
     return await axios.get(url, {headers: {Accept: 
      'application/json', },}, ).then((res)=>{
        return res.data.results;  
      });
      
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        
      } else {
        console.log('unexpected error: ', error);
        
      }
    }
  }

  export default pokemons