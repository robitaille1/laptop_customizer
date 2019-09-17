import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import './App.css';
import Summary from './Summary/Summary';
import Total from './Total/Total'
import Features from './Features/Features';
import Header from './Header/Header'
// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <Header />
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features 
              features={this.props.features}
              currency={USCurrencyFormat}
              selected={this.state.selected}
              update={this.updateFeature}/>
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <Summary
              currency={USCurrencyFormat}
              selected={this.state.selected} />
            <Total 
              currency={USCurrencyFormat} 
              total={total}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;