import React from 'react';
import Clock from '../Clock';
import Buttons from '../Buttons';

const NavBar = () => (
	<nav className="nav-bar">
		<Clock />
		<Buttons />
	</nav>
);

export default NavBar;