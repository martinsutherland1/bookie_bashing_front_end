import React, {useState} from 'react';

const AddBet = ({users, bets, handlePostBet, handleUpdateBet}) => {

    const [stateBet, setStateBet] = useState(
        {
          
          selection:"",
          week:"",
          user:"",
          result:""
        
        
        })

       

        const [selectPlayerBet, setSelectPlayerBet] = useState({
            id:"",
            name:"",
            wins:"",
            losses:"",
            winStreak:"",
            bestStreak: "",
            admin: "",
            password: ""
          
          
          });

          const handleSelect = (e) => {
              
            findUser(e.currentTarget.value, users)
        }

        

        const findUser = function(e, users){
  
            for (var i=0; i < users.length; i++) {
                if (users[i].name === e) {
                    
                    setStateBet({
                      selection:"",
                      week: "",
                      user:users[i],
                      result:0
                    })

                    setSelectPlayerBet({
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
  
          const handleChange = function(event){
  
            let propertyName = event.target.name;
            let copiedBet = {...stateBet}
            copiedBet[propertyName] = event.target.value;
            setStateBet(copiedBet)
            
            
          }
          
          const handleSubmit = function(event){
            event.preventDefault();
            handlePostBet(stateBet); 
            
            
            
          }

          


          return (
            <form onSubmit={handleSubmit}>
              
            <div className="stats-boxes">
            <div className="stats-form">
              
              <h4>{selectPlayerBet.name}'s bet</h4>
              <select name="users" onChange={handleSelect} value={selectPlayerBet}>
           <option value="">Select Player</option>
           <option value="Jaz">Jaz</option>
           <option value="Wullie">Wullie</option>
           <option value="Del">Del</option>
           <option value="Stu">Stu</option>
           <option value="Martin">Martin</option>
           </select>
            </div>
             
             <label>Selection</label>
             
               <div>
               <input type="text"  name="selection" onChange={handleChange}    />
               </div>
               <div>
              
               <label>Week</label>
             </div>
               <div>
               <input type="number" placeholder="" name="week" onChange={handleChange}   />
               </div>
            
              
            
              
             
               
             <div>
               <br></br>
             <button type="submit">Add Bet</button>
             </div>
               
             </div>
             
                  
               </form>
          )

}
export default AddBet;