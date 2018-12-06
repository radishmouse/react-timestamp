import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DateList from './DateList';

const someDates = [
  '2018-12-06 09:21:21',
  '2018-12-06 09:21:21',
  '2018-12-06 09:21:21',
  '2018-12-06 09:21:21',
  '💩',
  '2018-12-06 09:21:21',
  '2018-12-06 09:21:21',
  '2018-12-06 09:27:21'
];

class App extends Component {
  render() {

    return (
      <div className="main-component">
        <button className="my-button">go ahead, click me, i dare you</button>

        <DateList 
          listOfDates={someDates}

        /> 

      </div>
    );
  }
}

export default App;
