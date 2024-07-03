import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have some CSS for the Navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/browse-characters">Browse Characters</Link></li>
                <li><Link to="/comics">Comics</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
