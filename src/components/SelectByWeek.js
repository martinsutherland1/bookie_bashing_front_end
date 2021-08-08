import React, {useState} from 'react';
import '../css/leaderboard.css'


import SelectByWeekDetails from './SelectByWeekDetails';

const SelectByWeek = ({bets}) => {

    const [weeks, setWeeks] = useState([]);


    let selectWeek = ""

    const findWeek = function(e, bets){
             setWeeks([])   
        for (var i=0; i < bets.length; i++) {
            console.log(`e`, e)
            selectWeek = e;
            if (bets[i].week === e) {
                weeks.push(bets[i])
                
            }
           
            
            
        }
      }

      const handleSelect = (e) => {
              
        findWeek(e.currentTarget.value, bets)
    }

    // const leaderBoard = weeks.map((bet, index) => {

    //     return(
    //         <div>
    //             <SelectByWeekDetails bet={bet} index={index}/> 
                
                
    //         </div>
                   
                 
    //     )

        
      
    // })

  
                
if (weeks.length > 0) {

    return (
        <div className="leader-div">
            <br></br>
        <select className="leader-drop" onChange={handleSelect} value={selectWeek} >
         <option value="">Select Week</option>
         <option value="1">Week 1</option>
         <option value="2">Week 2</option>
         <option value="3">Week 3</option>
         <option value="4">Week 4</option>
        </select>
        {weeks[0].name}
        
        </div>

)

}else {
    return (
        <div className="leader-div">
            <br></br>
        <select className="leader-drop" onChange={handleSelect} value={selectWeek} >
         <option value="">Select Week</option>
         <option value="1">Week 1</option>
         <option value="2">Week 2</option>
         <option value="3">Week 3</option>
         <option value="4">Week 4</option>
        </select>
        
        
        </div>

)

}
    

 

   


     

    




   
        
    


  
  
}

export default SelectByWeek;