import React from 'react';
import Header from './components/Header';
import Form from './components/Form'
import CategoriasProvider from './context/CategoriaContext';
import BusquedaProvider from './context/BusquedaContext';
import ModalProvider from './context/ModalContext';
import ListRecetas from './components/ListRecetas';
import BackToTop from './components/BackToTop';


function App() {
  return (
    <BusquedaProvider>
      <CategoriasProvider>
        <ModalProvider>
          <Header/>
          <Form/>
          <ListRecetas/>
          <BackToTop/> 
        </ModalProvider>
      </CategoriasProvider>
    </BusquedaProvider>
  );
}

export default App;
