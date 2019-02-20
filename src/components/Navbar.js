import React from 'react';
import { NavLink} from 'react-router-dom';
//https://getbootstrap.com/docs/4.0/components/navbar/
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