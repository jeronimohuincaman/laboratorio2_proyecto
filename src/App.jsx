// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/header/Header.jsx';
import FooterComponent from './components/footer/Footer.jsx';
import ContenedorComponent from './components/contenedor/Contenedor.jsx';

function App() {
  return (
    <>
      <HeaderComponent />
      <h1>Contenedores</h1>
      <div className='container'>
        <ContenedorComponent />
        <ContenedorComponent />
        <ContenedorComponent />
        <ContenedorComponent />
      </div>
      <div className='footer'>
      <FooterComponent />
      </div>
    </>
  )
}

export default App
