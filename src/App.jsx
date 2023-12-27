import { useState } from 'react'
import './App.scss'
import Home from './coms/home'
import Nav from './coms/nav'
import NavLinks from './coms/nav/links';

function App() {
  return (
    <div className='main'>
      <Nav />
      <NavLinks />
      <Home />
    </div>
  )
}

export default App
