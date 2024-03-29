import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className='container'>
        
          <a className="navbar-brand" href="#">CRUD</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
              </li>
            </ul>

          </div>
        <Link className='btn btn-outline-light' to="/users/add">Add User</Link>
      </div>
    </nav>
  )
}
