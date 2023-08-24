import React from 'react'
import './Nav.css';

function Nav() {
  return (
    <div className="nav">
        <img className="nav__logo"
        src="https://www.themoviedb.org/t/p/w400/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="Netflix Logo"></img>

        <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
        alt="Netflix Logo"/>

    </div>
  )
}

export default Nav