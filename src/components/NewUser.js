import React, { useState } from 'react'


const Bet = ({handlePost}) => {

  const [selectValue, setSelectValue] = useState();
const [stateReview, setStateReview] = useState(
{
  name:"",
  wins: 0,
  losses:0,
  winStreak:0,
  bestStreak: 0,
  admin: selectValue,
  password: ""

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
  
  
}

    

return (
    <div>
    <div>
           
           <form onSubmit={handleSubmit}>
           <div>
           <label>Name</label>
          </div>
           <div>
           <input type="text" placeholder="" name="name" onChange={handleChange}  />
           </div>
           <div>
           <label>Admin</label>
          </div>
           <div>
           <select name="tables" onChange={handleChange} value={selectValue}>
            <option value="" >Select value</option>
            <option value="true">True</option>
            <option value="false">False</option>
            
</select>
           </div>
           <div>
             <input type="password" name="password" onChange={handleChange} />
           </div>
        
              
            <div>
            <button type="submit">Add</button>
            </div>
              
                 
              </form>
           </div>
   
       </div>
    
  )


}

export default Bet;