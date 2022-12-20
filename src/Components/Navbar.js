import React, { useState } from 'react'
import './Navbar.css'
import Hamburger from 'hamburger-react'
import { BsBraces } from 'react-icons/bs'

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [isOpen, setOpen] = useState(false)


    return (
        <div className='navbar-main'>
            <div className='navbar-log'>
                <h1>Tushar.Dev</h1>
                <div className='logo'><BsBraces/></div>
            </div>

            <div className='navbar-menu'>
                {/* here the logic of hamburger menu add extra class "active" and attach to css */}
                <ul id='navbar' className={showMenu ? "active" : "#navbar"}>
                    <li><a className='active'   href='/'>Home</a></li>
                    <li><a  className='active'  href='/projects'>Projects</a></li>
                    <li><a  className='active'  href='/about'>About</a></li>
                </ul>

            </div >
    

            <div id="mobile">
             <Hamburger  onToggle={(toggle)=> toggle={isOpen} ? setShowMenu(!showMenu):toggle={setOpen}} 
            color='white' size={25}  />
            </div>  
            {/* <BiMenu onClick={() => { setShowMenu(!showMenu) }} className='box' /> */}


        </div>
    )
}
