// Import Axios
import axios from 'axios';

// Using axios, we create a search method that is specific to our use case and export it at the bottom
const search = (query) => axios.get(`https://pokeapi.co/api/v2/pokemon-species/{name}/`);

// Export an object with a "search" method that searches the PokeAPI for the passed query
export default search;