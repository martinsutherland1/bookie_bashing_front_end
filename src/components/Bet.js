import React, { useState } from 'react'
import Leaderboard from './Leaderboard'


const Bet = ({user, handleUpdate, users}) => {



const [stateReview, setStateReview] = useState(
{
  id:user.id,
  name:user.name,
  wins:"",
  losses:"",
  winStreak:"",
  bestStreak: ""


})

const handleChange = function(event){
  let propertyName = event.target.name;
  let copiedReview = {...stateReview}
  copiedReview[propertyName] = event.target.value;
  setStateReview(copiedReview)
  
}

const handleSubmit = function(event){
  event.preventDefault();
  handleUpdate(stateReview); 
  console.log(`StateReview`, stateReview)
  
}

    

return (
  <div>
  <div>
 
         <form onSubmit={handleSubmit}>
        
         <div>
           <p>{user.name} {user.wins}</p>
            <label>Wins</label>
          </div>
            <div>
            <input type="number" placeholder={user.wins} name="wins" onChange={handleChange}   />
            </div>
            <div>
           
            <label>Losses</label>
          </div>
            <div>
            <input type="number" placeholder="losses" name="losses" onChange={handleChange}   />
            </div>
            <div>
           
           <label>Win Streak</label>
         </div>
           <div>
           <input type="number" placeholder="winStreak" name="winStreak" onChange={handleChange} value={user.winStreak}  />
           </div>
           <div>
           
           <label>Best Streak</label>
         </div>
           <div>
           <input type="number" placeholder={user.bestStreak} name="bestStreak" onChange={handleChange}   />
           </div>
            
          <div>
          <button type="submit">Update</button>
          </div>
            
               
            </form>
         </div>
 
     </div>
    
  )


}

export default Bet;