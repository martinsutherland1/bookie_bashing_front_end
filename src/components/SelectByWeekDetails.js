import React from 'react';

const SelectByWeekDetails = ({bet, index}) => {

    return (
        <div>
            <p> {index + 1} {bet.name} {bet.selection}</p>
           
        </div>
    )
  
}

export default SelectByWeekDetails;