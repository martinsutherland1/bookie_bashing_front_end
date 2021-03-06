import React, {useState} from 'react';

const WinningsDetails2 = ({winning}) => {

    
if (winning.runningTotal > 0){

        return (
            <div className="green-winnings">
            <h2>Winnings</h2>
            <h3 className="green-winnings">£{winning.runningTotal}</h3>
            </div>
        )

      } else if (winning.runningTotal < 0){

        return (
            <div >
            <h2>Winnings</h2>
            <h3 className="red-winnings">£{winning.runningTotal}</h3>
            </div>
        )
     
      } else {

        return (
            <div >
            <h2>Winnings</h2>
            <h3 className="zero-winnings">£{winning.runningTotal}</h3>
            </div>
        )}

   
  
}

export default WinningsDetails2;