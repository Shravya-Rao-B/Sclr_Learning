import React from 'react'
import {Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav_wrapper'>
      <Link to='/'>Home</Link>
      <Link to="/user">User</Link>
      <Link to="/cart">Cart</Link>
    </div>
  )
}

export default Navbar