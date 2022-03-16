import axios from 'axios';
import { pokeamonApi } from '../api/pokemonApi';
import {
   ExtraInfo,
   FetchPokemonResponse,
   Pokemon,
   FetchAllPokemonResponse,
} from '../interfaces/FetchPokemonInterfaces';
import { typeColor } from './typeColor';

// Get all pokemons name and url of data
export const fetchAllPokemons = async (): Promise<Pokemon[]> => {
   const resp = await pokeamonApi.get<FetchAllPokemonResponse>(
      '/pokemon?limit=251',
   );

   const smallPokemonList = resp.data.results;

   // Get all base info of all pokemons
   const promises = smallPokemonList.map(async (p) => {
      return await fetchAllDataPokemons(p.name);
   });

   // Await promises and map to create new object with desired info
   const results: Pokemon[] = (await Promise.all(promises)).map((p) => {
      return {
         id: p.id,
         name: p.name[0].toUpperCase() + p.name.slice(1),
         picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${p.id}.svg`,
         type:
            p.types[0].type.name[0].toUpperCase() +
            p.types[0].type.name.slice(1),
         url: p.species.url,
         ability:
            p.abilities[0].ability.name[0].toUpperCase() +
            p.abilities[0].ability.name.slice(1),
         height: p.height,
         weight: p.weight,
         capture_rate: 0,
         description: '',
         generation: p.id < 152 ? 1 : 2,
         color: typeColor[p.types[0].type.name],
      };
   });

   // Get extra info for all pokemons
   const infoPromises = results.map(async (r) => {
      return await fetchDescription(r.url);
   });

   // Await promises and map to create new object with desired extra info
   const resultsInfo = await (
      await Promise.all(infoPromises)
   ).map((i) => {
      return {
         capture_rate: i.capture_rate,
         description: i.flavor_text_entries[0].flavor_text,
      };
   });

   // Combine arrays info of all pokemons
   let resultsPokemon = results.map((item, i) =>
      Object.assign({}, item, resultsInfo[i]),
   );

   return resultsPokemon;
};

// Get all base info function
export const fetchAllDataPokemons = async (
   name: string,
): Promise<FetchPokemonResponse> => {
   const resp = await pokeamonApi.get<FetchPokemonResponse>(
      `/pokemon/${name}/`,
   );

   const smallPokemonList = resp.data;

   return smallPokemonList;
};

// Get all extra info function
export const fetchDescription = async (url: string) => {
   const resp = await axios.get<ExtraInfo>(url);
   const info = resp.data;

   return info;
};
