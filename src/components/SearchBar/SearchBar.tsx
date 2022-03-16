import { useForm } from '../../hooks/useForm';
import { useContext, useEffect } from 'react';
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
   useEffect(() => {
      updateSearch(pokemon);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [pokemon]);

   return (
      <form>
         <input
            type='text'
            placeholder='Search Pokemon...'
            value={pokemon}
            name='pokemon'
            onChange={handleInputChange}
            id='searchbar'
            autoComplete='off'
         />
      </form>
   );
};
