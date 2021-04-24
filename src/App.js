import React, {useState} from 'react'
import Navbar from './components/Navbar'
import GlobalStyle from './GlobalStyle'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Forfaits from './pages/Forfaits'
import Avions from './pages/Avions'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
        <GlobalStyle />
        <main>
          <section className="glass">
            <Router>
              <Navbar toggle={toggle}/>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/forfaits" component={Forfaits} exact />
                <Route path="/avions" component={Avions} exact />
              </Switch>
            </Router>
          </section>
        </main>
        <div className="circle1">
          
        </div>
        <div className="circle2">
          
        </div>
    </>
  );
}

export default App;
