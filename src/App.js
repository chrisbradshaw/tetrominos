import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import Normalize from 'normalize.css';
import TetrisGame from './components/TetrisGame';
import TetrisApp from './reducers/index.js';
import logo from './logo.svg';
import './App.css';

const store = createStore(TetrisApp, applyMiddleware(ReduxThunk));

const App = () => (
  <Provider store={store}>
    <div>
      <TetrisGame />
    </div>
  </Provider>
);

export default App;
