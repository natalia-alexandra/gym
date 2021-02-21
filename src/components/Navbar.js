import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import '../style/navbar.css'


export default function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <i className="fas fa-dumbbell logo-icon"></i> <p>GYM</p>
                </NavLink>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink to="/" exact className="nav-link" activeClassName="active-link" onClick={closeMobileMenu}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/services" className="nav-link" activeClassName="active-link" onClick={closeMobileMenu}>Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/membership" className="nav-link" activeClassName="active-link" onClick={closeMobileMenu}>Membership</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link" activeClassName="active-link" onClick={closeMobileMenu}>Contact</NavLink>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    )
}
