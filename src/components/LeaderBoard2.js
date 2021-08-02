import React, { useState } from 'react';

import LeaderboardLosses from './LeaderboardLosses';

const Leaderboard2 = ({users}) => {

    const leaderBoard = users.map((user, index) => {

        return(
            <div>
                <LeaderboardLosses user={user} index={index}/> 
                
                
            </div>
                   
                 
        )

        
      
    })

  

    

    let res = users.sort(function(a,b){return b.losses - a.losses})
    console.log(`res`, res)

    
    return(

        <div>
           <p>Most Losers</p>
           <p>{leaderBoard}</p>
           
        </div>
        
    )





   


  
}

export default Leaderboard2;