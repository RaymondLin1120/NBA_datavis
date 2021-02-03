import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar'
import {
   ApolloClient,
    InMemoryCache, 
    ApolloProvider, 
    HttpLink, 
    from
  } from '@apollo/client';
import {onError} from '@apollo/client/link/error'

import Home from './Pages/Home'
import Player from './Pages/Player/Player'
import Games from './Pages/Games/Games'

const errorLink = onError(({ graphqlErrors, networkError}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri:'http://localhost:8080/graphql' })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

// const AUTH_TOKEN = "auth-token";

// const httpLink = createHttpLink({
//   uri: 'http://localhost:8080/graphql'
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem(AUTH_TOKEN);

//   if (!token) {
//     return {
//       headers
//     };
//   }

//   return {
//     headers: {
//       ...headers,
//       authorization: `Bearer ${token}`
//     }
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// });

function App() {
  return (
    <ApolloProvider client = {client}>
      <Router>
        <div className="App">
            <Sidebar />
            <Switch>
              <Route exact path='/Home' component = {Home} />
              <Route exact path='/Player' component = {Player} />
              <Route exact path='/Games' component = {Games} />
              <Route component={() => 404} />
            </Switch>  
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
