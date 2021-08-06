import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const AllBetsDetails = ({bet, index, handleUpdateBet}) => {
    const [result, setResult] = useState();
    const [stateBet, setStateBet] = useState(
        {
          id:bet.id,
          selection:bet.selection,
          week:bet.week,
          user:bet.user,
          result:1
        
        
        })

        console.log(`stateBet`, stateBet)
        console.log(`result`, result)

        // const handleResultValue = (e) => {
        //     console.log(`e`, e)
        //     if (e === 0){
        //         setResult(0)
        //     }else if (e === 1){
        //         setResult(1)
        //     }
          
        // }

    const handleResult = function(event){
        
        let propertyName = event.target.name;
        
        let copiedBet = {...stateBet}
        copiedBet[propertyName] = event.target.value;
        console.log(copiedBet[propertyName])
        setStateBet(copiedBet)
        handleUpdateBet(stateBet); 
        
        
      }

      function getPlugs(bet){
        let plugs = [];
        if(bet.result === 1){
            plugs.push(<FontAwesomeIcon icon={faCheck} className="plug"/>)
        } else{
            plugs.push(<FontAwesomeIcon icon={faTimes} className="plug"/>)
        }
        return plugs;
    }
      

    return(

        <div>
            <p>{bet.user.name} {bet.selection} {getPlugs(bet)}</p>

              <div>
              
              <label>Result</label>
              <select name="bets" onChange={handleResult} value={result}>
           <option value="">Update</option>
           <option value="1">Winner</option>
           
           
           </select>
            </div>
        </div>
    )
  
}

export default AllBetsDetails;