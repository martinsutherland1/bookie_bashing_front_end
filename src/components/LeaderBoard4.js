import React, { useState } from 'react';
import LeaderboardBestStreak from './LeaderboardBestStreak';




const Leaderboard4 = ({users}) => {

    const leaderBoard = users.map((user, index) => {

        return(
            <div>
                <LeaderboardBestStreak user={user} index={index}/> 
            </div>
                   
                 
        )})

   let res = users.sort(function(a,b){return b.winStreak - a.winStreak})
    

    
    return(

        <div>
           <p>Best Streak</p>
           <p>{leaderBoard}</p>
           
        </div>
        
    )





   


  
}

export default Leaderboard4;