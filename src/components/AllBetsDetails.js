import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const AllBetsDetails = ({bet, index, handleUpdateBet, handleDeleteBet, currentUser}) => {
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

        if (bet.result === 0 && currentUser.admin === true){

            return(

                <div className="table-details-bets">
                    <p className="week-no">Week:{bet.week} - {bet.user.name}</p>
                    <p>{bet.selection}</p>
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

        } else if (bet.result === 1 && currentUser.admin === true){
            return(

                <div className="table-details-bets">
                    <p className="week-no">Week:{bet.week} - {bet.user.name}</p>
                    <p>{bet.selection}</p>
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

        if (bet.result === 0 && currentUser.admin === false){

            return(

                <div className="table-details-bets">
                    <p className="week-no">Week:{bet.week} - {bet.user.name}</p>
                    <p>{bet.selection}</p>
                    <h4 className="crosses"> {getPlugs(bet)}</h4>
                </div>
                    
            )

        } else if (bet.result === 1 && currentUser.admin === false){
            return(

                <div className="table-details-bets">
                    <p className="week-no">Week:{bet.week} - {bet.user.name}</p>
                    <p>{bet.selection}</p>
                    <h4 className="ticks"> {getPlugs(bet)}</h4>
                </div>
            )
        }
      

   
  
}

export default AllBetsDetails;