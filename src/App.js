import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Container from './components/pages/Container'
import Home from './components/pages/Home';
import NoPage from './components/pages/NoPage';
import Catalogo from './components/pages/Catalogo';
import IniciarSesion from './components/pages/IniciarSesion';
import CrearUsuario from './components/pages/CrearUsuario';
import Address from './components/pages/Address';
import CerrarSesion from './components/pages/CerrarSesion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Container/> }> 
          <Route index element={<Home />}></Route>
          <Route path='catalogoproductos' element={<Catalogo />}></Route>
          <Route path='iniciarsesion' element={<IniciarSesion />}></Route>
          <Route path='crearusuario' element={<CrearUsuario />}></Route>
          <Route path='cerrarsesion' element={<CerrarSesion />}></Route>
          <Route path='Address' element={<Address />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
