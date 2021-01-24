import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar'

import Home from './Pages/Home'

function App() {
  return (
    <Router>
      <div className="App">
          <Sidebar />
          <Switch>
            <Route path='/' component = {Home} />
            <Route component={() => 404} />
          </Switch>  
      </div>
    </Router>
  );
}

export default App;
