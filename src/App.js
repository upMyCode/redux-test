import React from 'react'
import * as actions from './actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './App.css';

  function App({ counter, incDispatcher, decDispatcher }) {
    return (
      <div className="App">
        <div className='description__container'>
            <p>{counter}</p>
            <button className='incValue' onClick={incDispatcher}>INC</button>
            <button className='decValue' onClick={decDispatcher}>DEC</button>
        </div>
      </div>
    );
  }

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

const mapDispatchToProps = (dispatch) => {
  const {incAction, decAction} = bindActionCreators(actions, dispatch)
  return {
    incDispatcher: incAction,
    decDispatcher: decAction
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
