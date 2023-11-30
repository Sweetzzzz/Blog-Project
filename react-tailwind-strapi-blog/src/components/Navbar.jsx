import React, {useState} from 'react';
import {menu, close, logo} from '../assets'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle)


  return (
    <div className="w-full h-[60px] bg-[#f0f0f0] z-10 relative drop-shadow-lg">
        <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto mr-10'>
            <div className='flex items-center'>
                {/* <img src={'https://i.gyazo.com/2ce11e63b697a9c2507a1c7ee3f56396.png'} alt="logo" className='sm:ml-10px ss:ml-10px md:ml-3px opacity-[60%] w-full h-[40px]' /> */}
            </div>
            <div className='flex items-center '>
                <ul className='hidden md:flex text-[#1C1B1F] '>
                    {/* <li>Home</li>
                    <li>About</li> 
                    <li>Support</li>
                    <li>Platform</li>
                    <li>Pricing</li> */}
                </ul>
            </div>
            <div className='hidden md:flex sm:mr-10px md:mr-0 '>
            <NavLink className={'hidden md:flex sm:mr-10px md:mr-0'} to="/about">
            <button className="border-none bg-transparent text-black mr-4">About</button>
            </NavLink>
            <NavLink className={'hidden md:flex sm:mr-10px md:mr-0 '} to="/events">
            <button className='border-none bg-transparent text-black mr-4'>Events</button>
            </NavLink>
                <button className='border-none bg-transparent text-black mr-4'>Shop</button>
                <button className='px-2.5 py-1 t text-black bg-transparent  border-none hover:text-[#332D41] hover:bg-[#EADDFF]'>Contact</button>
            </div>

            <div className='md:hidden ' onClick={handleClick}>
                <img src={!toggle?menu:close} alt="menu" className='w-[28px] h-[28px] object-contain mr-10'/>
            </div>
        </div>

        <ul className={toggle?'absolute bg-white w-full px-8 md:hidden':'hidden'}>
            <li>Home</li>
            <NavLink to="/about"><li>About</li></NavLink>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
            <div className='flex flex-col my-4'>
                <button className='bg-transparent text-black mb-4 py-3 px-8'>Login</button>
                <button className='px-6 py-3'>Sign Up</button>
            </div>
        </ul>
    </div>
    
  )
}

export default Navbar