import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DateList from './DateList';
import StampButton from './StampButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dates: []
    };
  }

  render() {
    console.log('I am App and I am rendering');
    return (
      <div className="main-component">
        <DateList 
          listOfDates={this.state.dates}
        /> 
        <StampButton 
          handleClick={this._addDate}
        />
      </div>
    );
  }

  _addDate = () => {
    const aNewDate = new Date();
    this.setState({
      // replace the value of 'dates'
      // with a *new* array
      dates: [
        // it should contain
        // all the existing values from this.state.dates
        ...this.state.dates,

        // but also!
        // our new date object as a string
        aNewDate.toLocaleString()
      ]
    });    
  }
}

export default App;
