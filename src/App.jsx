import dotenv from 'dotenv';
import React, { Fragment } from 'react';
import './config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import Routes from './routes'

dotenv.config();

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Routes />
      </Fragment>
    </Provider>
  );
}

export default App;
