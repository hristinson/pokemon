import axios from 'axios';

    async function  pokemonCurrent(url: string) {
    try {
     return await axios.get(url, {headers: {Accept: 
      'application/json', },}, ).then((res)=>{
        //console.log(`${url}`);
        

        return res.data;  
      });
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        
      } else {
        console.log('unexpected error: ', error);
      }
    }
  }

  export default pokemonCurrent