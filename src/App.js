import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";
import Todo from './Components/Todo/Todo';
import News from './Components/News/News';
import Crypto from './Components/Crypto/Crypto';

class App extends Component {
render () {

  return (
    <HashRouter basename="/">
      <div className="App">
        <Header />
        <Sidebar />
        <div>
          <Route exact path="/Todo" component={Todo} />
          <Route exact path="/News" component={News} />
          <Route path="/Crypto" component={Crypto}/>
        </div>
      </div>
      </HashRouter>
  );
}
}
export default App;


