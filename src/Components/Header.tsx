import React from 'react'
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import CartIcon from '../Icons/CartIcon';
import LogoIcon from '../Icons/LogoIcon'
import {Outlet, Link} from 'react-router-dom'


export const Header = () => {
    return (
        <>
        <HeaderContainer>
            <div className='logo-container'>
                <span className='logo-icon'><LogoIcon /></span>
                <Navbar.Brand href="/"><span className='header-logo'>Xolitude Photography</span></Navbar.Brand>
            </div>
            <div>
                <Nav className="justify-content-end">
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/gallery' className='nav-link'>Gallery</Link>
                    <Link to="/contact" className='nav-link'>Contact</Link>
                    {/* <Link to="/cart" className='nav-link'><CartIcon /></Link> */}
                </Nav>
            </div>
        </HeaderContainer>
        <Outlet />
        </>
    )
}

const HeaderContainer = styled.div`
    padding: 0 50px;
    background-color: #eeeeee;
    height: 120px;
    width: 100%;
    justify-content: space-between;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;


    .logo-container {
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
    }
    .logo {
        height: 45px;
        padding:0 20px;
    }
    .logo-icon {
        padding: 0 15px;
    }

    .header-text {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    a {
        color: #252525;
        font-family: 'Tenor Sans', sans-serif;
    }
    a:hover {
        color: #252525;
    }
    .nav-link:visited {
        color:  #252525;
    }
`

