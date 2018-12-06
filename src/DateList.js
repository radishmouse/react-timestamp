import React from 'react';

// const datesAsListItems = (someDates) => {
//     return someDates.map((dateString) => {
//         return (<li>{dateString}</li>);
//     });
// };

function convertDatesToItems(someDates) {
    const datesAsListItems = someDates.map((dateString) => {
        return (<li>{dateString}</li>);
    }); 
    return datesAsListItems;   
}

const DateList = (props) => {
    return (
        <ul className="date-list">
          {convertDatesToItems(props.listOfDates)}
        </ul>        
    );
};

// function DateList(props) {
    // return ();
// }

export default DateList;