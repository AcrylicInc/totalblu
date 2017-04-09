import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

const HeaderLink = props => (
	<NavLink {...props} activeClassName="active" />
);

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="header">
				<ul>
					<li><HeaderLink to="/app_dev.php/">Home</HeaderLink></li>
					<li><HeaderLink to="/app_dev.php/dashboard">dashboard</HeaderLink></li>
					<li><HeaderLink to="/app_dev.php/profile">profile</HeaderLink></li>
				</ul>
			</div>
		);
	}
};


	