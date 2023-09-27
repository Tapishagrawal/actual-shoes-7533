import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
        <Link to="/">LOGO</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
    </div>
  )
}

