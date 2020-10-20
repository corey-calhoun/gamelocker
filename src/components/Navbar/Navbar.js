import React from 'react'
import './Navbar.css'
import logo from '../../img/logo.png'

function Navbar() {
    return (
        <div className='Navbar'>
            <div className='Navbar__left'> 
                <img 
                    className='logo'
                    src={logo}
                    alt='logo'
                />
            </div>
            <div className='Navbar__center'>

            </div>
            <div className='Navbar__right'>

            </div>
            

            

        </div>
    )
}

export default Navbar
