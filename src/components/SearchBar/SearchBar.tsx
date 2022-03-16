import React from 'react';
import { useForm } from '../../hooks/useForm';

interface FormProp {
   pokemon: string;
}

export const SearchBar = () => {
   const { values, handleInputChange } = useForm<FormProp>({
      pokemon: '',
   });
   const { pokemon } = values;
   return (
      <input
         type='text'
         placeholder='Search Pokemon...'
         value={pokemon}
         name='pokemon'
         onChange={handleInputChange}
      />
   );
};
