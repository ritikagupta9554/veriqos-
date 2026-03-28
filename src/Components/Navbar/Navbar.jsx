import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../image/logo.png"

const Navbar = () => {
  return (
    <>
    <div className=' bg-teal-400 flex p-3  h-12 px-10 justify-between'>
      <div className=' h-12'> <img className='h-1/2' src={logo} alt="" /></div>
      <div className='h-1'>
         <ul className='list-none flex  gap-3'>
      <li className='border p-1 rounded'>
        <NavLink to="/"  >Home</NavLink>
      </li>
      <li className='border p-1 rounded'>
        <NavLink to="/services" >Services</NavLink>
      </li>
      <li className='border p-1 rounded'>
        <NavLink to="/platform" >Platform</NavLink>
      </li>
      <li className='border p-1 rounded'>
        <NavLink to="/contact" >Contact</NavLink>
      </li>
      <li className='border p-1 rounded'>
        <NavLink to="/industries" >Industries</NavLink>
      </li>
      <li className='border p-1 rounded'>
        <NavLink to="/about" >About Us</NavLink>
      </li>
      
      
    </ul>
      </div>
    </div>
   
    </>
  )
}

export default Navbar