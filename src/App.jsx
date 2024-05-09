import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/Navbar/Topbar.jsx';
import Home from './components/Home/Home.jsx';

function App() {
  

  return (
    <>
      <Topbar />
      <Home />
    </>
  )
}

export default App
