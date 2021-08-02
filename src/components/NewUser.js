import React, { useState } from 'react'


const Bet = ({handlePost}) => {


const [stateReview, setStateReview] = useState(
{
  name:"",
  wins: 0,
  losses:0,
  winStreak:0,
  bestStreak: 0

})

const handleChange = function(event){
  let propertyName = event.target.name;
  let copiedReview = {...stateReview}
  copiedReview[propertyName] = event.target.value;
  setStateReview(copiedReview)
  
}

const handleSubmit = function(event){
  event.preventDefault();
  handlePost(stateReview); 
  console.log(`StateReview`, stateReview)
  
}

    

return (
    <div>
    <div>
           
           <form onSubmit={handleSubmit}>
           <div>
           <label>Name</label>
           
           </div>
           <div>
           <input type="text" placeholder="" name="name" onChange={handleChange} value={stateReview.name} />
           </div>
           <br></br>
        
              
            <div>
            <button type="submit">Add</button>
            </div>
              
                 
              </form>
           </div>
   
       </div>
    
  )


}

export default Bet;