import React, { useState } from 'react'
import Leaderboard from './Leaderboard'


const Bet = ({handleUpdate, users, currentUser, setUpdateUser, updateUser}) => {


  const [selectPlayer, setSelectPlayer] = useState();
  const [user, setUser] = useState();


const [stateReview, setStateReview] = useState(
{
  id:"",
  name:"",
  wins:0,
  losses:0,
  winStreak:0,
  bestStreak: 0,
  admin: "",
  password: ""


})

const findUser = function(selectPlayer, users){
  for (var i=0; i < users.length; i++) {
      if (users[i].name === selectPlayer) {
          
          setStateReview({
            id:users[i].id,
            name:users[i].name,
            wins:0,
            losses:0,
            winStreak:0,
            bestStreak: 0,
            admin: users[i].admin,
            password: users[i].password
          
          
          })
      }
  }
}




const handleSelect = (e) => {
  setSelectPlayer(e.currentTarget.value)
  findUser(selectPlayer, users)
}


console.log(`selectPlayer`, selectPlayer)
console.log(`state`, stateReview)





const handleChange = function(event){
  
  let propertyName = event.target.name;
  let copiedReview = {...stateReview}
  copiedReview[propertyName] = event.target.value;
  setStateReview(copiedReview)
  
  
}

const handleSubmit = function(event){
  event.preventDefault();
  handleUpdate(stateReview); 
  
  
}

if (currentUser.id === null){
    return (
                <select name="tables" onClick={handleSelect} value={selectPlayer}>
                   
                    {/* <option value="" >Select Player</option>
                    <option value={users[0].name}>{user[0].name}</option>
                    <option value={users[1].name}>{user[1].name}</option>
                    <option value={users[2].name}>{user[2].name}</option>
                    <option value={users[3].name}>{user[3].name}</option>
                    <option value={users[4].name}>{user[4].name}</option> */}
                </select>
          
        )

}else {
    return (
        <div>
        <div>
       
               <form onSubmit={handleSubmit}>
              
               <div>
               <select name="users" onChange={handleSelect} value={selectPlayer}>
              <option value="" >Select Player</option>
              <option value="Jaz">Jaz</option>
              <option value="Wullie">Wullie</option>
              <option value="Del">Del</option>
              <option value="Stu">Stu</option>
              <option value="Martin">Martin</option>
  </select>
                  
                </div>
                <p>{stateReview.name}</p>
                
                <label>Wins</label>
                  <div>
                  <input type="number"  name="wins" onChange={handleChange}    />
                  </div>
                  <div>
                 
                  <label>Losses</label>
                </div>
                  <div>
                  <input type="number" placeholder="" name="losses" onChange={handleChange}   />
                  </div>
                  <div>
                 
                 <label>Win Streak</label>
               </div>
                 <div>
                 <input type="number" placeholder="" name="winStreak" onChange={handleChange}  />
                 </div>
                 <div>
                 
                 <label>Best Streak</label>
               </div>
                 <div>
                 <input type="number"  name="bestStreak" onChange={handleChange}   />
                 </div>
                
                  
                <div>
                <button type="submit">Update</button>
                </div>
                  
                     
                  </form>
               </div>
       
           </div>
    )
}
    




}

export default Bet;