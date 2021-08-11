import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const AllBetsDetails = ({bet, index, handleUpdateBet, handleDeleteBet}) => {
    const [result, setResult] = useState();
    const [stateBet, setStateBet] = useState(
        {
          id:bet.id,
          selection:bet.selection,
          week:bet.week,
          user:bet.user,
          result:1
        
        
        })

        

        

    const handleResult = function(event){
        
        let propertyName = event.target.name;
        let copiedReview = {...stateBet}
        copiedReview[propertyName] = event.target.value ;
        setStateBet(copiedReview)
        handleUpdateBet(stateBet); 
        
        
      }

      


        
console.log(`stateBet`, stateBet)

      function getPlugs(bet){
        let plugs = [];
        if(bet.result === 1){
            plugs.push(<FontAwesomeIcon icon={faCheck} className="plug"/>)
        } else{
            plugs.push(<FontAwesomeIcon icon={faTimes} className="plug"/>)
        }
        return plugs;
    }

    const handleDelete = () => {
        handleDeleteBet(bet.id)
        }

        if (bet.result === 0){

            return(

                <div className="table-details-bets">
                    <h4 className="week-no">Week:{bet.week}</h4>
                    <h4>{bet.user.name} - {bet.selection}</h4>
                    <h4 className="crosses"> {getPlugs(bet)}</h4>
        
                      <div>
                          
                      
                      
                      <select name="bets" onChange={handleResult} value={result}>
                   <option value="">Update</option>
                   <option value="1">Winner</option>
                   
                   </select>
                   

                   <button type="submit" className="delete" onClick={handleDelete} onTouchEnd={handleDelete}>Delete</button>
                    </div>
                    
                </div>
            )

        } else if (bet.result === 1){
            return(

                <div className="table-details-bets">
                    <h4 className="week-no">Week:{bet.week}</h4>
                    <h4>{bet.user.name} - {bet.selection}</h4>
                    <h4 className="ticks"> {getPlugs(bet)}</h4>
        
                      <div>
                          
                      
                      
                      <select name="bets" onChange={handleResult} value={result}>
                   <option value="">Update</option>
                   <option value="1">Winner</option>
                   
                   
                   </select>
                   <button type="submit" className="delete" onClick={handleDelete} onTouchEnd={handleDelete}>Delete</button>
                    </div>
                    
                </div>
            )
        }
      

   
  
}

export default AllBetsDetails;