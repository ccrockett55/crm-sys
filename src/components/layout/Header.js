import React from 'react'
import logo from './lively2.png'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      
      <img src={logo} alt="" width="100" height="24" />
    </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Tickets</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Logout</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}
