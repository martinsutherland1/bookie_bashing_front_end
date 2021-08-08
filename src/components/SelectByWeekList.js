import React from 'react';
import SelectByWeekDetails from './SelectByWeekDetails';

const SelectByWeekList = ({weeks}) => {

    const weeklyBets = weeks.map((week, bet, index, handleUpdateBet) => {

        return(
            <div>
                <SelectByWeekDetails week={week} index={index}/> 
                
                
            </div>
                   
                 
        )})

        console.log('weeklyBets', weeklyBets)

    return (
      <p>{weeklyBets}</p>
    )
  
}

export default SelectByWeekList;