import React, { useState } from 'react';
import LeaderboardBestStreak from './LeaderboardBestStreak';
import '../css/leaderboard.css';



const Leaderboard4 = ({users}) => {

    let res = users.sort(function(a,b){return b.winStreak - a.winStreak})

    const leaderBoard = users.map((user, index) => {

        return(
            <div>
                <LeaderboardBestStreak user={user} index={index}/> 
            </div>
                   
                 
        )})

   
    

    
    return(

        <div className="table">
        <h4 className="header">Best Streak</h4>
        <h4>{leaderBoard}</h4>
        
     </div>
        
    )





   


  
}

export default Leaderboard4;