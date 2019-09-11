import React, { Component } from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import './App.css'


class App extends Component {
render() {
  return (
    <div className= 'App'>
    {/* <Login/> */}
      {/* <Home/> */}
<Logout/>
    </div>
  )
}
}

export default App;
