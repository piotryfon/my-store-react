import React, { Component } from 'react';
import '../App.css';
import Store from './Store';

const $hamburgerPrice = 5;
const $hotdogPrice = 2;
const $chipsPrice = 3;
const $drinkPrice = 1.5;

class App extends Component {

  constructor() {
    super();
    this.state = {
      hamburgerPrice: $hamburgerPrice,
      hotdogPrice: $hotdogPrice,
      chipsPrice: $chipsPrice, 
      drinkPrice: $drinkPrice,
      total: 0,
    }
  }

  addTotal = (price) => {
    this.setState({ total: this.state.total + price })
  }

  subtractTotal = (price) => {
    this.setState({total: this.state.total - price})
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>my-store</h2>
        </header>
        <div className="container">
          <Store dish={"hamburger"} price={this.state.hamburgerPrice} addTotal={this.addTotal} subtractTotal={this.subtractTotal} />
          <Store dish={"hotdog"} price={this.state.hotdogPrice} addTotal={this.addTotal} subtractTotal={this.subtractTotal} />
          <Store dish={"chips"} price={this.state.chipsPrice} addTotal={this.addTotal} subtractTotal={this.subtractTotal} />
          <Store dish={"drink"} price={this.state.drinkPrice} addTotal={this.addTotal} subtractTotal={this.subtractTotal} />
        </div>
        <h2>Total: {this.state.total} zł.</h2>
      </div>
    );
  }
}

export default App;
