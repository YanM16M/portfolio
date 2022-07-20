import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
    return ( 
        <div className="navbar_container">
            <div className="left_content">
                <h1 className="title"><a href="/">Portfolio</a></h1>
                <ul className="nav_items">
                    <li className="nav_item active">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav_item">
                        <a href="./projects">Projets</a>
                    </li>
                    <li className="nav_item">
                        <a href="./projects">Hobbits</a>
                    </li>
                    <li className="nav_item">
                        <a href="./contacts">Contacts</a>
                    </li>
                </ul>
            </div>
            <div className="center_content">
                <img src="" alt="" />
            </div>
            <div className="right_content">
                <a href="">
                    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png" alt="instagram" />
                </a>
                <a href="">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25347.png" alt="twitter" />
                </a>
                <a href="">
                    <img src="https://cdn-icons.flaticon.com/png/512/3128/premium/3128210.png?token=exp=1658148501~hmac=310e501da69b835d57a0a731a32db093" alt="youtube" />
                </a>
                <a href="">
                    <img src="https://cdn-icons.flaticon.com/png/512/3291/premium/3291695.png?token=exp=1658157465~hmac=781630d87980acd35ad312730dd861d1" alt="youtube" />
                </a>
            </div>
        </div>
     );
}

export default Navbar;