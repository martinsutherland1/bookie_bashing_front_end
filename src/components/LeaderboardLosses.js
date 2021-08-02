import React from 'react'

const LeaderboardLosses = ({user, index}) => {

    


  return (
      <div>
          <p> {index +1} {user.name} {user.losses} </p>
          
      </div>
  )

}

export default LeaderboardLosses;