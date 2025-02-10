import React from 'react';
import img from "../../assets/images.jpg";
import "../../styles/navlinks.css";
import { useNavigate } from 'react-router-dom';

export default function NavLinks() {
    const navigate = useNavigate();

    return(
        
            <div className='navbar-container'>
                <img src="{img}" alt='Logo' width={"100px"} className="logo" />

            <div className="navlinks">
                <ul>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('/about')}>About</li>
                    <li onClick={() => navigate('/contact')}>Contact</li>
                </ul>

            </div>
            </div>

        
    );
}
