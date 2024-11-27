import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css';

const Navbar = ()=>{

    return(
        <nav className='navbar'>
             <h1>Image Capture </h1>
             {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdb17ZVJkHnPC6RtB-hpl3y84QgfB6M7Uxw&s" alt="Logo" className="navbar-icon" /> */}
             <div className="nav-links">
                <Link to="/">Camera</Link>
                <Link to="/gallery">Gallery</Link>
            </div>
        </nav>
    )
}

export default Navbar;