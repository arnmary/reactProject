import React from 'react'
import './StyleMain.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 function Controls() {
  return (
    <div>
       <div className="buttons">
        <button className="leftButton">
            <a href="#"> STREAM NOW<FontAwesomeIcon icon="fa-solid fa-circle-play" className='iEl' /></a>
        </button>
        <button  className="rightButton">
            <a href="#"> ALL EPISODES</a>
        </button>
       </div>
    </div>
  )
}
export default Controls;