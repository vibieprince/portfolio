import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation(); // Get the current page URL

    return (
        <nav style={{ display: 'flex', gap: '20px', padding: '10px', background: '#333', color: 'white' }}>
            <Link 
                to="/" 
                style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: '5px',
                    background: location.pathname === '/' ? 'purple' : 'transparent'
                }}
            >
                Home
            </Link>
            <Link 
                to="/about" 
                style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: '5px',
                    background: location.pathname === '/about' ? 'purple' : 'transparent'
                }}
            >
                About
            </Link>
            <Link 
                to="/projects" 
                style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: '5px',
                    background: location.pathname === '/projects' ? 'purple' : 'transparent'
                }}
            >
                Projects
            </Link>
            <Link 
                to="/contact" 
                style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: '5px',
                    background: location.pathname === '/contact' ? 'purple' : 'transparent'
                }}
            >
                Contact
            </Link>
            <Link 
                to="/skills" 
                style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: '5px',
                    background: location.pathname === '/skills' ? 'purple' : 'transparent'
                }}
            >
                Skills
            </Link>
        </nav>
    );
};

export default Navbar;

