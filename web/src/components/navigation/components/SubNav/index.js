import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

require('./style.scss');


const HeaderLink = (props) => (
	<NavLink {...props} activeClassName="active" />
);

export default class SubNav extends Component {
	constructor(props) {
		super(props);

	}
	
	getMenuLinks(){
		let subLinks = [];

		
	}
// <li><HeaderLink to="/app_dev.php/">Home</HeaderLink></li>
// 							<li><HeaderLink to="/app_dev.php/dashboard">dashboard</HeaderLink></li>
// 							<li><HeaderLink to="/app_dev.php/profile">profile</HeaderLink></li>
	render() {
		return (
			<div className="sub-nav">
				{getMenuLinks()}
			</div>
		);
	}
};


	