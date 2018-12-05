import React from 'react';

const StampList = (props)  => {
    return (
        <ul>
            {props.dateList.map(d => {
                return (
                    <li>{d.toLocaleString()}</li>
                )
            })}
        </ul>

    );
};

export default StampList