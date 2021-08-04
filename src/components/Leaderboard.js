import React, { useState } from 'react';
import LeaderboardWins from './LeaderboardWins';
import LeaderboardLosses from './LeaderboardLosses';
import '../css/leaderboard.css';

const Leaderboard = ({users}) => {

    const leaderBoard = users.map((user, index) => {

        return(
            <div>
                <LeaderboardWins user={user} index={index}/> 
                
                
            </div>
                   
                 
        )

        
      
    })

  

    

    let res = users.sort(function(a,b){return b.wins - a.wins})
    

    
    return(

        <div className="table">
           <h4 className="header">Most Winners</h4>
           <h4>{leaderBoard}</h4>
           
        </div>
        
    )





   


  
}

export default Leaderboard;