import React from 'react';
import Clock from '../Clock';
import Buttons from '../Buttons';

const NavBar = ( props ) => (
	<nav className="nav-bar">
		<Clock />
		<Buttons toggleAddLinks={props.toggleAddLinks} toggleEditLinks={props.toggleEditLinks}/>
	</nav>
);

export default NavBar;