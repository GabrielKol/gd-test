import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Route exact path='/' component={Home}/>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
