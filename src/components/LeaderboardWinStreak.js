import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const LeaderboardWinStreak = ({user, index, bets}) => {

  

  function getChecks(user){
    let checks = [];
    for(let i=1; i<=user.winStreak; i++){
        checks.push(<FontAwesomeIcon icon={faCheck} className="ticks"/>)
    } 
    return checks;
}

// const form = [];

// const getForm = () => {

  
  
//   for (let i=0; i<bets.length; i++){
//     if (bets[i].user.name === user.name ){
//       form.push(bets[i].result)
//     }
//     return form;
//   }
// }



//   const returnForm = (form) => {
//     getForm()
//     for (let i=0; i<form.length; i++){
      
//       return form
//     }
//   }

//   console.log(`returnForm`, returnForm(form))

  return (
      <div className="table-details">
          <p > {index +1}. {user.name} {getChecks(user)}</p>
          
      </div>
  )

}

export default LeaderboardWinStreak;