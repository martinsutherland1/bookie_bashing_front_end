import { all } from 'q';
import React, {useState} from 'react';
import AllBetsDetails from './AllBetsDetails';

const AllBets = ({bets, handleUpdateBet, handleDeleteBet}) => {
    
   
    

    if (bets.length === 0){
        return (
          <div className="no-bets">
      <h4>**No bets to display**</h4>
      
          </div>
          
        )
      }

     
    

    const allBetList = bets.filter(bet => bet.week == 2)
    
    .map((bet, index) => {

            return(
                <div className="table">
                    <AllBetsDetails bet={bet} index={index} handleUpdateBet={handleUpdateBet} handleDeleteBet={handleDeleteBet}/>
                    
                    
                </div>
                       
                     
            )})  

             

            let res = bets.sort(function(a,b){return b.week - a.week})

    

 

    return (
        <div className="table-bet">
        
            <br></br>
                {allBetList}
                
        </div>
    )
}

export default AllBets;