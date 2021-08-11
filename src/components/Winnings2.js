import React from 'react';
import WinningsDetails2 from './WinningsDetails2';
import '../css/leaderboard.css'

const Winnings2 = ({winnings}) => {

    const getWinnings = winnings.map((winning, index) => {

        return (
            <WinningsDetails2 winning={winning} index={index} />
        )
      
    })

    return (
        <div className="winnings">
            {getWinnings}
        </div>
    )
  
}

export default Winnings2;