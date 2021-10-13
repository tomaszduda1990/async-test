import React from 'react';
import { NavLink } from 'react-router-dom';
const NavItem = (props) => {
	return (
		<li>
			<NavLink to={props.url}>{props.text}</NavLink>
		</li>
	);
};

export default NavItem;
