import axios from 'axios';

export const pokeamonApi = axios.create({
   baseURL: 'https://pokeapi.co/api/v2/',
});
