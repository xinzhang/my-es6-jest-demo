import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartItem from './components/CartItem';

class App extends Component {
  render() {
    let item = {
      id:3,
      name:"Instant Noodles",
      description:"Not bad",
      priceUSD:20
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <CartItem item={item}></CartItem>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
