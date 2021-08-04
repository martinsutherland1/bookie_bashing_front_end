import React from 'react'

const LeaderboardLosses = ({user, index}) => {

    


  return (
      <div className="table-details">
          <p > {index +1}. {user.name} {user.losses} </p>
          
      </div>
  )

}

export default LeaderboardLosses;