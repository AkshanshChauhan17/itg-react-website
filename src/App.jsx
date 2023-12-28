import { useState } from 'react'
import './App.scss'
import Home from './coms/home'
import Nav from './coms/nav'
import NavLinks from './coms/nav/links';

function App() {
  const [scrollVal, setScrollVal] = useState();

  window.onscroll = () =>{
    setScrollVal(window.scrollY); console.log(scrollVal);
  }

  return (
    <div className='main'>
      <Nav />
      <NavLinks sv={scrollVal} />
      <Home />
    </div>
  )
}

export default App
