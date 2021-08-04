import React from 'react'
import '../css/logo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

const Logo = () => {

    return (

        <div className="logo-div">
            <h2 className="logo-h1"><FontAwesomeIcon icon={faFutbol} className="check"/> Bookie Bashing <FontAwesomeIcon icon={faFutbol} className="check"/></h2>
        </div>
    )
  
}

export default Logo;
