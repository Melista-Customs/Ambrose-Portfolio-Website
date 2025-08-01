import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>My Freelance Portfolio</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;