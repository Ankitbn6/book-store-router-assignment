import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{fontFamily:"Sevillana"}} className='flex justify-between items-center text-3xl font-[Rubik Scribble] text-white bg-pink-500 py-2 px-8'>
      <div  className='flex justify-start gap-8 items-center '>
        <Link to={'/'}><img className='h-[50px] ' src='../../../BookStore-removebg-preview.png' alt='logo' /></Link>
        <p>Spritual</p>
        <p>Buisness</p>
        <p>Technical</p>
      </div>
      <div  className=' flex justify-end items-center gap-8  '>
        <p>Login</p>
        <p>signup</p>
      </div>
    </div>
  )
}

export default Navbar
