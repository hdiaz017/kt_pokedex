import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/NavBar/Navbar';

export const Navigation = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path='gen1' element={<h1>Gen 1</h1>} />
            <Route path='gen2' element={<h1>Gen 2</h1>} />
            <Route path='pokemon/:id' element={<h1>Single Pokemon</h1>} />
            <Route path='home' element={<h1>All Pokemon</h1>} />
            <Route path='/*' element={<Navigate to='/home' replace />} />
         </Routes>
      </BrowserRouter>
   );
};
