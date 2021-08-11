import React, {useState} from 'react';

const WinningsDetails2 = ({winning}) => {

    
if (winning.runningTotal > 0){

        return (
            <div className="zero-winnings">
            <h2>Winnings</h2>
            <h3>£{winning.runningTotal}</h3>
            </div>
        )

      } else if (winning.runningTotal < 0){

        return (
            <div className="zero-winnings">
            <h2>Winnings</h2>
            <h3>£{winning.runningTotal}</h3>
            </div>
        )
     
      } else {

        return (
            <div className="zero-winnings">
            <h2>Winnings</h2>
            <h3>£{winning.runningTotal}</h3>
            </div>
        )}

   
  
}

export default WinningsDetails2;