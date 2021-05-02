import React, {useState} from 'react'
import Navbar from './components/Navbar'
import GlobalStyle from './GlobalStyle'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Forfaits from './pages/Forfaits'
import Avions from './pages/Avions'
import Login from './pages/Login'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [login, setLogin] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  function isAuth (value) {
    setLogin(value)
  }

  return (
    <>
        <GlobalStyle />
        <main>
          <section className="glass">
            <Router>
              <Navbar toggle={toggle} login={login} isAuth={isAuth} />
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/forfaits" component={Forfaits} exact />
                <Route path="/avions" component={Avions} exact />
                <Route path="/login" component={(props) => <Login {...props} isAuth={isAuth} />} exact />
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
