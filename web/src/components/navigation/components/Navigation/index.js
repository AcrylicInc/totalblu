import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import SubNav from '../SubNav';
import ProfileAvatar from 'components/profileAvatar';

require('./style.scss');


const HeaderLink = (props) => (
	<NavLink {...props} activeClassName="active" />
);

export default class Navigation extends Component {
	constructor(props) {
		super(props);

	}

	getProfileInitials() {
		let profileMeta = {'name' : 'Ryan Thorp'};
		let splitName = profileMeta.name.split(" ");

		console.log(splitName);

		let firstInitial = splitName[0].charAt(0);
		let lastInitial = splitName[splitName.length - 1].charAt(0);

		return firstInitial+lastInitial;
	}
	render() {
		return (
			<nav className="navigation-top">
				<div className="row">
					<div className="col-lg-11">
						<div className="navigation-page">
							<h1>Dashboard</h1>
						</div>
						<SubNav />
						<ul className="navigation-links">
							<li><HeaderLink to="/app_dev.php/">Home</HeaderLink></li>
							<li><HeaderLink to="/app_dev.php/dashboard">dashboard</HeaderLink></li>
							<li><HeaderLink to="/app_dev.php/profile">profile</HeaderLink></li>
						</ul>
					</div>

					<div className="col-lg-1">
						<ProfileAvatar 
							userId={1}
							userName={"Ryan Thorp"}
							/>
					</div>
				</div>
			</nav>
		);
	}
};


	