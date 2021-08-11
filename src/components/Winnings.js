import React from 'react';
import WinningsDetails from './WinningsDetails.js';
import '../css/leaderboard.css'

const Winnings = ({winnings, handleUpdateWinnings}) => {

    const getWinnings = winnings.map((winning, index) => {

        return (
            <WinningsDetails winning={winning} index={index} handleUpdateWinnings={handleUpdateWinnings}/>
        )
      
    })

    return (
        <div className="winnings">
            {getWinnings}
        </div>
    )
  
}

export default Winnings;