import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { DetailCard } from '../components/DetailCard/DetailCard';
import { FavoritesPage } from '../components/Favorites/FavoritesPage';
import { Gen1Page } from '../components/GenPages/Gen1Page';
import { Gen2Page } from '../components/GenPages/Gen2Page';

import { GridCards } from '../components/Grid/GridCards';
import { Navbar } from '../components/NavBar/Navbar';

import { PokemonProvider } from '../context/PokemonProvider';

export const Navigation = () => {
   return (
      <BrowserRouter>
         <PokemonProvider>
            <Navbar />
            <Routes>
               <Route path='gen1' element={<Gen1Page />} />
               <Route path='gen2' element={<Gen2Page />} />
               <Route path='pokemon/:id' element={<DetailCard />} />
               <Route path='home' element={<GridCards />} />
               <Route path='favorites' element={<FavoritesPage />} />
               <Route path='/*' element={<Navigate to='/home' replace />} />
            </Routes>
         </PokemonProvider>
      </BrowserRouter>
   );
};
