import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div id="title"><Link to="/">e-ankiety.pl</Link></div>
            <Link to="/profile"><div className="icon-adult"></div></Link>
        </header>
    );
}

export default Header;