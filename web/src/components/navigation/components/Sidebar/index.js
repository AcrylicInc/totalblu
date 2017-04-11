import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

require('./style.scss');


const HeaderLink = (props) => (
	<NavLink {...props} activeClassName="active" />
);

export default class Sidebar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="sidebar">
				<div className="navigation-page">
					<h1>Dashboard</h1>
				</div>
				<ul className="navigation-links">
					<li><HeaderLink to="/app_dev.php/">Home</HeaderLink></li>
					<li><HeaderLink to="/app_dev.php/dashboard">dashboard</HeaderLink></li>
					<li><HeaderLink to="/app_dev.php/profile">profile</HeaderLink></li>
				</ul>
			</nav>

		);
	}
};


	