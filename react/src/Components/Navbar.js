import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import DatenTime from './DatenTime';
import Greeting from './Greeting'
import StopWatch from './StopWatch';
import ListView from './ListView';

export default function Navbar(props) {
  const MenuData = { '/breakfast': 'Breakfast', '/lunch': 'Lunch', '/dinner': 'Dinner', 
  '/datentime':'DatenTime', '/greeting': 'Greeting', '/stopwatch':'StopWatch','/listview':'ListView' }
  let color = {color :'purple', fontFamily: '"Josefin Sans", sans-serif', fontWeight : 'bold'};

  const links = Object.entries(MenuData).map((res) => {
    return (
      <li className='nav-item'>
        <Link style={color} className='nav-link' to={res[0]}>{res[1]}</Link>
      </li>
    )
  })
  let title = 'Task';
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              {links}
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/breakfast' element={<Breakfast />} />
        <Route path='/lunch' element={<Lunch />} />
        <Route path='/dinner' element={<Dinner />} />
        <Route path='/datentime' element={<DatenTime />} />
        <Route path='/greeting' element={<Greeting />} />
        <Route path='/stopwatch' element={<StopWatch />} />
        <Route path='/listview' element={<ListView />} />

      </Routes>
    </Router>
  )
}
