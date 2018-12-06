import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DateList from './DateList';

const someDates = [
  '💩',
  '2018-12-06 09:21:21',
  '2018-12-06 09:27:21'
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dates: [
        '💩',
        '💩',
        '💩',
      ]
    };
  }
  render() {

    return (
      <div className="main-component">
        <button 
          onClick={() => { 
            console.log('ouch.');
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
            // someDates.push(aNewDate);
            // console.log(someDates);
          }} 
          className="my-button"
        >go ahead, click me, i dare you</button>

        <DateList 
          listOfDates={this.state.dates}
        /> 

      </div>
    );
  }
}

export default App;
