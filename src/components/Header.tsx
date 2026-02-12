import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.jpeg';
import '../styles/Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container header-content">

                <NavLink to="/" className="logo text-serif">
                    <img src={logo} alt="Logo" />
                    המתכונים של ג'וני
                </NavLink>
                <nav className="nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        בית
                    </NavLink>
                    <NavLink to="/categories" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        מתכונים
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
