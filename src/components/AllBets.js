import { all } from 'q';
import React, {useState} from 'react';
import AllBetsDetails from './AllBetsDetails';
import '../css/leaderboard.css'

const AllBets = ({bets, handleUpdateBet, handleDeleteBet, currentUser}) => {

    const [selectWeek, setSeelectWeek] = useState();

    
    
    const handleChange = (e) => {
        
        setSeelectWeek(e.target.value)
      }
    

    if (bets.length === 0){
        return (
          <div className="no-bets">
      <h4>**No bets to display**</h4>
     
      
          </div>
          
        )
      }

     

      

     
    

    const allBetList = bets.filter(bet => bet.week == selectWeek)
    
    .map((bet, index) => {

            return(
                <div className="table">
                    <AllBetsDetails bet={bet} index={index} handleUpdateBet={handleUpdateBet} handleDeleteBet={handleDeleteBet} currentUser={currentUser}/>
                    
                    
                </div>
                       
                     
            )})  

             

            let res = bets.sort(function(a,b){return b.week - a.week})

            if (selectWeek === undefined || selectWeek === "") {
                return (
                    
                  <div className="leader-div">
                              <br></br>
           
                      <select className="week-drop"name="tables" onChange={handleChange} value={selectWeek}>
                    <option value="" >Select Week</option>
                    <option value="12">Week 12</option>
                    <option value="11">Week 11</option>
                    <option value="10">Week 10</option>
                    <option value="9">Week 9</option>
                    <option value="8">Week 8</option>
                    <option value="7">Week 7</option>
                    <option value="6">Week 6</option>
                    <option value="5">Week 5</option>
                    <option value="4">Week 4</option>
                    <option value="3">Week 3</option>
                    <option value="2">Week 2</option>
                    <option value="1">Week 1</option>
                  </select>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  </div>       
            
                    
                )
            } else if ( selectWeek > 0){

                return (

                  <div>
                    
                    
                     <div className="leader-div">
                     <h3>View bets</h3>
                     
                  
                      <select className="week-drop"name="tables" onChange={handleChange} value={selectWeek}>
                    <option value="" >Select Week</option>
                    <option value="6">Week 6</option>
                    <option value="5">Week 5</option>
                    <option value="4">Week 4</option>
                    <option value="3">Week 3</option>
                    <option value="2">Week 2</option>
                    <option value="1">Week 1</option>
                  </select>
                  
                  </div>
                  <br></br>
                    <div className="table-bet">
                    {allBetList}
                    </div>
                  </div>
                    
                )

            }

    

 

   
}

export default AllBets;