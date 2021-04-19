import React, {useState} from 'react'
import Navbar from './components/Navbar'
import GlobalStyle from './GlobalStyle'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DropMenu from './components/DropMenu'
import Home from './pages/Home'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar toggle={toggle} />
        <DropMenu isOpen={isOpen} toggle={toggle} />
        <Home />
      </Router>
    </>
  );
}

export default App;
