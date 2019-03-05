import React from 'react';
import { NavLink} from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">			
				<ul className="navbar-nav mr-auto">
				 <li className="nav-item"><NavLink className="navbar-brand" to="/">ex-Landmen</NavLink></li>
				 <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
				 <li className="nav-item"><NavLink className="nav-link" to="/consultation">Consultation</NavLink></li>
				</ul>
		</nav>
		);
};


export default Navbar;