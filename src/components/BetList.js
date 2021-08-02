import React from 'react';
import Bet from './Bet';

const BetList = ({bets, users, handlePost, handleUpdate}) => {

    const allBets = users.map((user, index) => {
      return (
          <div>
              <ul>
                  <Bet user={user} index={index} users={users} handlePost={handlePost} handleUpdate={handleUpdate}/>
              </ul>
          </div>
      )
    })

    return(
        <div>
            <h1>Bet List</h1>

            {allBets}
        </div>
    )
  
}

export default BetList;