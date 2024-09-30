import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">{props.Home}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">{props.About}</a>
          </li>
         </ul>
      </div>
      <div className="form-check form-switch text-light">
         <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
         <label className="form-check-label" for="flexSwitchCheckDefault">dark mode</label>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    Home: PropTypes.string.isRequired,
    About: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title:"set title here",
    Home:"Home",
    About:"About"

}
   