import React, { useState } from 'react';
import LeaderboardWinStreak from './LeaderboardWinStreak';
import '../css/leaderboard.css';



const Leaderboard3 = ({users, bets}) => {

    let res = users.sort(function(a,b){return b.winStreak - a.winStreak})

    const leaderBoard = users.map((user, index) => {

        return(
            <div>
                <LeaderboardWinStreak user={user} index={index} bets={bets}/> 
            </div>
                   
                 
        )})

   
    

    
    return(

        <div className="table">
           <h4 className="header">Win Streak</h4>
           <h4>{leaderBoard}</h4>
           
        </div>
        
    )





   


  
}

export default Leaderboard3;