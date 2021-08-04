import React, { useState } from 'react';
import '../css/leaderboard.css';
import LeaderboardLosses from './LeaderboardLosses';

const Leaderboard2 = ({users}) => {

    const leaderBoard = users.map((user, index) => {

        return(
            <div>
                <LeaderboardLosses user={user} index={index}/> 
                
                
            </div>
                   
                 
        )})

   let res = users.sort(function(a,b){return b.losses - a.losses})
    console.log(`res`, res)

    
    return(

        <div className="table">
           <h4 className="header">Most Losses</h4>
           <h4>{leaderBoard}</h4>
           
        </div>
        
     
        
    )





   


  
}

export default Leaderboard2;