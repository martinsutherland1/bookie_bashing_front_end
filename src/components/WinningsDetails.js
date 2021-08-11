import React, {useState} from 'react';

const WinningDetails = ({winning, handleUpdateWinnings}) => {

    
    const [stateWinnings, setStateWinnings] = useState(
        {
          id:winning.id,
          runningTotal:""
    })

        
    const handleSubmit = function(event, currentUser){
        event.preventDefault();
        handleUpdateWinnings(stateWinnings); 
        
        
        
      }
        

    const handleWinnings = function(event){
        
        let propertyName = event.target.name;
        let copiedReview = {...stateWinnings}
        copiedReview[propertyName] = event.target.value ;
        setStateWinnings(copiedReview)
         
        
        
      }

      if (winning.runningTotal > 0){

        return (
            <div >
                <form onSubmit={handleSubmit}>
                <div>
                    <label>Update winnings</label>
                </div>
                <div>
                <input type="number"  name="runningTotal" onChange={handleWinnings} step="any"/>
                </div>
                <h2>Winnings</h2>
                <h3 className="green-winnings">£{winning.runningTotal}</h3>
                <button type="submit">Update</button>
                </form>
               
            </div>
        )

      } else if (winning.runningTotal < 0){

        return (
            <div >
            <form onSubmit={handleSubmit}>
            <div>
                <label>Update winnings</label>
            </div>
            <div>
            <input type="number"  name="runningTotal" onChange={handleWinnings} step="any"/>
            </div>
            <h2>Winnings</h2>
            <h3 className="red-winnings">£{winning.runningTotal}</h3>
            <button type="submit">Update</button>
            </form>
           
        </div>
        )
     
      } else {

        return (
            <div className="zero-winnings">
            <form onSubmit={handleSubmit}>
            <div>
                <label>Update winnings</label>
            </div>
            <div>
            <input type="number"  formnovalidate name="runningTotal" onChange={handleWinnings} />
            </div>
            <h2>Winnings</h2>
            <h3>£{winning.runningTotal}</h3>
            <button type="submit">Update</button>
            </form>
           
        </div>
        )
     
      }

   
  
}

export default WinningDetails;