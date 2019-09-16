import React, { Component } from 'react';


export default class Total extends Component {
    render() {
      return (
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {this.props.currency.format(this.props.total)}
          </div>
        </div>
      )
    }
  }