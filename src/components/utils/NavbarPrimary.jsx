import React from 'react'
import { Link } from 'react-router-dom'

const NavbarPrimary = () => {
  return (
    <div className="flex justify-end items-center space-x-3 py-3">
        <Link to = '#' >
            <span className='text-logo'>About us</span>
        </Link>
        <Link to = '#' >
            <span className='text-logo'>Contact us</span>
        </Link>
    </div>
  )
}

export default NavbarPrimary