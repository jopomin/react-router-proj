import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='App'>
      <h1>Logo</h1>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/bio'>
          <li>Bio</li>
        </Link>
        <Link to='/contacts'>
          <li>Contacts</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
