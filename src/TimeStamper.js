import React, {Component} from 'react';

import StamperButton from './StamperButton';
import StampList from './StampList';

class TimeStamper extends Component {
    constructor(props) {
        super(props);

        // The TimeStamper has one piece of state: an array of dates.
        this.state = {
            dates: []
        };
    }

    // We'll render all the dates in our this.state.dates array.
    // For each one, let's produce a <li> that holds a string version of our date
    render() {
        return (
            <div>                
                <StamperButton 
                    handleClick={this._addDate}
                />
                <StampList
                    dateList={this.state.dates}
                />
            </div>
        );
    }

    _addDate = (e) => {
        // Create a variable that holds a Date object with the current date/time
        const now = new Date();

        // Update our state...
        this.setState({
            // set a new value for the "dates" key.
            // Its value is an array
            dates: [
                // with all the current values "sprinkled" in
                ...this.state.dates, 
                
                // and our new date object
                now
            ]
        });
    }
}

export default TimeStamper;