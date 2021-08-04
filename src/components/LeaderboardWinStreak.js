import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const LeaderboardWinStreak = ({user, index}) => {

  function getChecks(user){
    let checks = [];
    for(let i=1; i<=user.winStreak; i++){
        checks.push(<FontAwesomeIcon icon={faCheckCircle} className="check"/>)
    } 
    return checks;
}


  return (
      <div>
          <p> {index +1} {user.name} {getChecks(user)} </p>
          
      </div>
  )

}

export default LeaderboardWinStreak;