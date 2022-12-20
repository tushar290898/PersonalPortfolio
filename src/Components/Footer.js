import React from 'react'
import { BsBraces } from 'react-icons/bs'
import '../Components/Footer.css'
import { AiFillGithub } from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer'>
        <div className='inner-footer'>
            <h1>Tushar.Dev</h1>
            <div className='footer-logo'>< BsBraces/></div>
        </div>
        <a href='https://github.com/tushar290898'><AiFillGithub/></a>
    </div>
  )
}

export default Footer