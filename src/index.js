// Develop by Gaurav for the Scandiweb project test for junior react developer position https://github.com/sarangkkl

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from '@apollo/client'
import { client } from './graphql/Apollo';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>

    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

