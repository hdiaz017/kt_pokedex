import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { DetailCard } from '../components/DetailCard/DetailCard';
import { GridCards } from '../components/Grid/GridCards';
import { Navbar } from '../components/NavBar/Navbar';

import { PokemonProvider } from '../context/PokemonProvider';

export const Navigation = () => {
   return (
      <BrowserRouter>
         <PokemonProvider>
            <Navbar />
            <Routes>
               <Route path='gen1' element={<GridCards gen='1' />} />
               <Route path='gen2' element={<GridCards gen='2' />} />
               <Route path='pokemon/:id' element={<DetailCard />} />
               <Route path='home' element={<GridCards gen='all' />} />
               <Route path='favorites' element={<h1>FAvorites</h1>} />
               <Route path='/*' element={<Navigate to='/home' replace />} />
            </Routes>
         </PokemonProvider>
      </BrowserRouter>
   );
};
