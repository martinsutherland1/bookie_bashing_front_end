import React from 'react'

const LeaderboardWins = ({user, index}) => {

    


  return (
      <div>
          <p> {index +1} {user.name} {user.wins} </p>
          
      </div>
  )

}

export default LeaderboardWins;