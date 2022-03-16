import React, { ChangeEvent } from 'react';
import { useForm } from '../../hooks/useForm';
import { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import './SearchBar.css';

interface FormProp {
   pokemon: string;
}

export const SearchBar = () => {
   const { updateSearch } = useContext(PokemonContext);
   const { values, handleInputChange } = useForm<FormProp>({
      pokemon: '',
   });
   const { pokemon } = values;
   const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      updateSearch(pokemon);
   };
   return (
      <form onSubmit={handleSubmit}>
         <input
            type='text'
            placeholder='Search Pokemon...'
            value={pokemon}
            name='pokemon'
            onChange={handleInputChange}
            id='searchbar'
         />
      </form>
   );
};
