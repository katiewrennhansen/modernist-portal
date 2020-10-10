import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Home from './components/Home'
import Architect from './components/Architect';
import Portal from './components/Portal';
import Map from './components/Map';
import Login from './components/Login';

import './App.css';

const API_URL = 'https://api.ncmodernist.org/all';

const App = () => {
  const [architects, setArchitects] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(resJson => setArchitects(resJson)) 
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <header className="header">
        <a className="brand" href="https://www.ncmodernist.org/">
            <img height="73" src="https://www.ncmodernist.org/nc_mod_logo.png" width="300" alt="modernist logo" />
        </a>
        <nav className="navigation hover-class">
          <Link to='/'>Home</Link>
          <Link to='/map'>Map</Link>
          <Link to='/architects'>Architects</Link>
          <Link to='/portal'>Portal</Link>
          <Link to='/login'>Login</Link>
        </nav>
      </header>
        <main className="main hover-class">
        <Switch>
              <Route
                exact path='/'
                component={Home}
              />
              <Route 
                  exact path='/map'
                  component={() => 
                    <Map
                      architects={architects} 
                    />
                  }
              />
              <Route
                exact path='/architects'
                component={() => 
                  <Landing
                    architects={architects} 
                  />
                }
              />
              <Route 
                  exact path='/architect/:id'
                  component={Architect}
              />
              <Route 
                  exact path='/portal'
                  component={Portal}
              />
              <Route 
                  exact path='/login'
                  component={Login}
              />
          </Switch>
        </main>
    </div>
  );
}

export default App;
