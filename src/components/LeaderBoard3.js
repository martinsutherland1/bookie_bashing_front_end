import React, { useState } from 'react';
import LeaderboardWinStreak from './LeaderboardWinStreak';



const Leaderboard3 = ({users}) => {

    const leaderBoard = users.map((user, index) => {

        return(
            <div>
                <LeaderboardWinStreak user={user} index={index}/> 
            </div>
                   
                 
        )})

   let res = users.sort(function(a,b){return b.winStreak - a.winStreak})
    

    
    return(

        <div>
           <p>Form</p>
           <p>{leaderBoard}</p>
           
        </div>
        
    )





   


  
}

export default Leaderboard3;