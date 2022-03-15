import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { GridCards } from '../components/Grid/GridCards';
import { Navbar } from '../components/NavBar/Navbar';

export const Navigation = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path='gen1' element={<GridCards gen='1' />} />
            <Route path='gen2' element={<GridCards gen='2' />} />
            <Route path='pokemon/:id' element={<h1>Single Pokemon</h1>} />
            <Route path='home' element={<GridCards gen='all' />} />
            <Route path='favorites' element={<GridCards gen='all' />} />
            <Route path='/*' element={<Navigate to='/home' replace />} />
         </Routes>
      </BrowserRouter>
   );
};
