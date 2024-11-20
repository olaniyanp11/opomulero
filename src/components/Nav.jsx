import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { BiPhone } from 'react-icons/bi'
import { FcCancel } from 'react-icons/fc'
import { BiX } from 'react-icons/bi'

export const Nav = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleOpen = () => {
    setisOpen(!isOpen);
  }
  return (
    <>
      <nav className=' h-[10vh] flex justify-between items-center px-[40px] shadow-sm bg-white '>
        <div className=''>
          <img src={logo} alt="" className='w-[100px]' />
        </div>
        <div className='md:w-[40%] w-[50%] justify-between sm:flex items-center hidden  '>
          <Link to='/'> Home</Link>
          <Link to='/about'> About</Link>
          <Link to='/contact' className='btn flex justify-center items-center gap-3'> Contact <BiPhone /> </Link>
        </div>
        < GiHamburgerMenu className=' sm:hidden text-secondary  ' onClick={toggleOpen} />
        <div className={`sm:hidden  bg-white w-[80%] h-full top-0 float-right pr-[20px] pt-[20px] z-10  fixed ${isOpen ? 'right-0' : 'right-[-100%]'} transition-all ease-in-out`} >
          <div onClick={toggleOpen} className='flex  text-secondary text-[30px] float-right '>< BiX /></div>
          <div className='flex flex-col text-xl w-full h-full  justify-start items-center mt-[100px] gap-3'>
            <Link to='/'> Home</Link>
            <Link to='/about'> About</Link>
            <Link to='/contact' className='btn flex justify-center items-center gap-3'> Contact <BiPhone /> </Link>
          </div>

        </div>
      </nav>
    </>
  )
}
