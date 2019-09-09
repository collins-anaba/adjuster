import React, { Component } from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import './App.css'


class App extends Component {
render() {
  return (
    <div className= 'App'>
    <Login/>
      {/* <Home/> */}

    </div>
  )
}
}

export default App;
