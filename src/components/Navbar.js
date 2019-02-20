import React from 'react';
import { NavLink} from 'react-router-dom';
//https://getbootstrap.com/docs/4.0/components/navbar/
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">			
				<ul className="navbar-nav mr-auto">
				 <li><NavLink className="navbar-brand" to="/">Ex-Landmen</NavLink></li>
				 <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
				 <li className="nav-item"><NavLink className="nav-link" to="/consultation">Consultation</NavLink></li>
				</ul>
		</nav>
		);
};


export default Navbar;