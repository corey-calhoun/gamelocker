import React, {useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../img/logo.png'
import { SearchOutlined } from '@material-ui/icons'
import { Avatar } from '@material-ui/core';

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        })
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`navbar ${show && "navbar__white"}`}>
            <img 
                className='navbar__logo'
                src={logo}
                alt='logo'
            />

            <div className='navbar__search'>
                <input 
                    variant='outlined'
                    type='search'
                    color='primary'
                />
                <SearchOutlined 
                    className='navbar__searchIcon'
                    fontSize='large'
                    type='button'
                    onClick='#'
                />
            </div>

            <div className="navbar__userInfo">
                <Avatar 
                    className="navbar__avatar"
                    src="https://placeimg.com/640/480/people"
                    alt=""   
                /> 
                <h3 className="navbar__userName">User</h3>
            </div>
            

        </div>
    )
}

export default Navbar
