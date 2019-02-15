import React from 'react';
import { NavLink} from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<ul>
				 <li><NavLink to="/">Home</NavLink></li>
				 <li><NavLink to="/about">About</NavLink></li>
				 <li><NavLink to="/consultation">Consultation</NavLink></li>
				</ul>
			</div>
		</nav>
		);
};


export default Navbar;