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
				<ul className="sidebar-links">
					<li><HeaderLink to="/app_dev.php/dashboard">DB</HeaderLink></li>
					<li><HeaderLink to="/app_dev.php/talent-acquisition">TA</HeaderLink></li>
					<li><HeaderLink to="/app_dev.php/profile">PM</HeaderLink></li>
				</ul>
			</nav>

		);
	}
};


	