import React from 'react'

const LeaderboardBestStreak = ({user, index}) => {

    


  return (
      <div className="table-details">
          <p > {index +1}. {user.name} {user.bestStreak} </p>
          
      </div>
  )

}

export default LeaderboardBestStreak;