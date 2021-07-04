import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';

const reducer = ( state = 0, action ) => {
  switch ( action.type ) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    default:
      return state
  }
}

const store = createStore(reducer)

// const { incAction, decAction } = bindActionCreators(actions, dispatch)

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,document.getElementById('root')
  )

