import React, { useState } from 'react'
import Leaderboard from './Leaderboard'
import '../css/stats.css';

const Bet = ({handleUpdate, users, setCurrentUser, currentUser, setAuth}) => {


  const [selectPlayer, setSelectPlayer] = useState({
    id:"",
    name:"",
    wins:"",
    losses:"",
    winStreak:"",
    bestStreak: "",
    admin: "",
    password: ""
  
  
  });
  


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

const handleSelect = (e) => {
  // console.log(e)
  // setSelectPlayer(e.currentTarget.value)
  // setTimeout(function() { findUser(e.currentTarget.value, users); }, 5000);
  findUser(e.currentTarget.value, users)
  
  

  
  
}

const findUser = function(e, users){
  
  for (var i=0; i < users.length; i++) {
      if (users[i].name === e) {
          
          setStateReview({
            id:users[i].id,
            name:users[i].name,
            wins: 0,
            losses:0,
            winStreak:0,
            bestStreak: 0,
            admin: users[i].admin,
            password: users[i].password
          
          
          })
          setSelectPlayer({
            id:users[i].id,
            name:users[i].name,
            wins:users[i].wins,
            losses:users[i].losses,
            winStreak:users[i].winStreak,
            bestStreak: users[i].bestStreak,
            admin: users[i].admin,
            password: users[i].password
          
          
          })
      }
  }
}

const handleChange = function(event, selectPlayer){
  let propertyName = event.target.name;
  let copiedReview = {...stateReview}
  copiedReview[propertyName] = event.target.value ;
  setStateReview(copiedReview)
  
  
}

const handleSubmit = function(event, currentUser){
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
              
               <div className="stats-form">

                 
               <select className="users" name="users" onChange={handleSelect} value={selectPlayer}>
              <option value="" >Select Player</option>
              <option value="Jaz">Jaz</option>
              <option value="Wullie">Wullie</option>
              <option value="Del">Del</option>
              <option value="Stu">Stu</option>
              <option value="Martin">Martin</option>
              </select>
                  
                </div>
                <div className="stats-boxes">
                <h4>{stateReview.name}</h4>
                
                <label>Wins {selectPlayer.wins}</label>
                
                  <div>
                  <input type="number" className="wins" name="wins" onChange={handleChange}    />
                  </div>
                  <div>
                 
                  <label>Losses {selectPlayer.losses}</label>
                </div>
                  <div>
                  <input type="number" className="losses" placeholder="" name="losses" onChange={handleChange}   />
                  </div>
                  <div>
                 
                 <label>Win Streak {selectPlayer.winStreak}</label>
               </div>
                 <div>
                 <input type="number" className="winStreak" placeholder="" name="winStreak" onChange={handleChange}  />
                 </div>
                 <div>
                 
                 <label>Best Streak {selectPlayer.bestStreak}</label>
               </div>
                 <div>
                 <input type="number" className="bestStreak" name="bestStreak" onChange={handleChange}   />
                 </div>
                
                  
                <div>
                  <br></br>
                <button type="submit">Update Scores</button>
                </div>
                  
                </div>
                
                     
                  </form>
               </div>
       <br></br>
           </div>
    )
}
    




}

export default Bet;