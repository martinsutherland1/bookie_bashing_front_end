import React from 'react'

const LeaderboardBestStreak = ({user, index}) => {

    


  return (
      <div>
          <p> {index +1} {user.name} {user.winStreak} </p>
          
      </div>
  )

}

export default LeaderboardBestStreak;