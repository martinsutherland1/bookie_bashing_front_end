import { all } from 'q';
import React from 'react';
import AllBetsDetails from './AllBetsDetails';

const AllBets = ({bets, handleUpdateBet}) => {


    

    const allBetList = bets.map((bet, index) => {

            return(
                <div>
                    <AllBetsDetails bet={bet} index={index} handleUpdateBet={handleUpdateBet}/>
                    
                    
                </div>
                       
                     
            )})  

    

    

    console.log(`hello`, allBetList)

    return (
        <div>
            
                {allBetList}
            
        </div>
    )
}

export default AllBets;