import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import Home from './Pages/Home'
import Player from './Pages/Player'

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
});

function App() {
  return (
    <ApolloProvider client = {client}>
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
    </ApolloProvider>
  );
}

export default App;
