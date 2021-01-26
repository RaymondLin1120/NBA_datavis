import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar'

import Home from './Pages/Home'
import Player from './Pages/Player'

function App() {
  return (
    <Router>
      <div className="App">
          <Sidebar />
          <Switch>
            <Route exact path='/Home' component = {Home} />
            <Route exact path='/Player' component = {Player} />
            <Route component={() => 404} />
          </Switch>  
      </div>
    </Router>
  );
}

export default App;
