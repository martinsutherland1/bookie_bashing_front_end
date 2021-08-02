import React, { useState } from 'react';
import LeaderboardWins from './LeaderboardWins';
import LeaderboardLosses from './LeaderboardLosses';

const Leaderboard = ({users}) => {

    const leaderBoard = users.map((user, index) => {

        return(
            <div>
                <LeaderboardWins user={user} index={index}/> 
                
                
            </div>
                   
                 
        )

        
      
    })

  

    

    let res = users.sort(function(a,b){return b.wins - a.wins})
    console.log(`res`, res)

    
    return(

        <div>
           <p>Most Winners</p>
           <p>{leaderBoard}</p>
           
        </div>
        
    )





   


  
}

export default Leaderboard;