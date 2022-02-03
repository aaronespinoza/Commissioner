import React,{useState} from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Nba from './components/NBA'

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Nav from './components/Nav'
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/Login'
import UpdatePage from './pages/UpdatePage'
import HomeBg from './components/HomeBg';



// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShow = () => setShow(true);
  const handleShowLogin = () => setShowLogin(true);

  return (
    

    <ApolloProvider client={client}>
      <Router>
        <Nav show={show} showLogin={showLogin} handleClose={handleClose} handleCloseLogin={handleCloseLogin} handleShow={handleShow} handleShowLogin={handleShowLogin}/>
         
            <Route exact path="/">
              <HomeBg/>
            </Route>

            <Route exact path="/NBA">
              
              <SearchPage/>
            </Route>

            <Route exact path="/update">
              
              <UpdatePage/>
            </Route>
         
      </Router>
    </ApolloProvider>

    
  );
}

export default App;
