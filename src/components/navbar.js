import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './styles/Navbar.css';

function Navbar(){
    
    const [click, setClick] = useState(false);
    function handleClick() {
        setClick(!click)
    }
        return (
            <div className='main-nav'>
                <div className='title'>
                    <h2>L3 MIAGE <i class="fas fa-rocket"></i></h2> 
                    <div className='burger' onClick={handleClick}>
                        <i className={click? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
                <div>
                    <ul className={click? "nav-links-active" :"nav-links"}>
                        <li className= "nav-items1">Home</li>
                        <li className="nav-items2">Projects</li>
                        <li className="nav-items3">About us</li>
                        <li className="nav-items4">Contact</li>
                    </ul>
                </div>
                
                
            </div>
        );
}

        
    


export default Navbar;
