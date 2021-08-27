import React from 'react'
import {PropTypes} from 'prop-types'
// import {Link} from 'react-router-dom'

export default function Navbar(props) {
    let navColor="light";
    let navTextColor="black"
    if(props.mode !== "light"){
      navColor="dark";
      navTextColor="white"
    }
    return (
        <div>
        <nav className={"navbar navbar-expand-lg navbar-"+ navColor +" bg-"+ navColor}>
        <div className="container-fluid">
                <a className="navbar-brand" style={{color: navTextColor}} href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" style={{color: navTextColor}} href="/">Home</a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" style={{color: navTextColor}} to="/about">About</Link>
              </li> */}
            </ul>
            
            <div className="nav-item dropdown">
          <div className="nav-item mx-3 dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Themes
          </div>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="dropdown-item" id="light" onClick={props.toggleMode}>Light</li>
              <li className="dropdown-item" id="dark" onClick={props.toggleMode}>Dark</li>
              <li className="dropdown-item" id="green" onClick={props.toggleMode}>Green</li>
              <li className="dropdown-item" id="grey" onClick={props.toggleMode}>Grey</li>
            </ul>
           </div>

          </div>
        </div>
      </nav>
      </div>
    )
}

Navbar.propTypes = {title: PropTypes.string}

Navbar.defaultProps = {title: 'Title goes here'}