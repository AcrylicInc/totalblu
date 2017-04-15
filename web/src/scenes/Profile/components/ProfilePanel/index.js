import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import ProfileAvatar from 'components/profileAvatar';

require('./style.scss');

const HeaderLink = (props) => (
	<NavLink {...props} activeClassName="active" />
);

export default class ProfilePanel extends Component {
	constructor(props) {
		super(props);
	console.log(this.props);

	}


	render() {
		return (
			<div className="profile-panel block">
				<div className="profile-meta block-wrapper">
					<div className="row">
						<div className="col-lg-1">
							<ProfileAvatar />
						</div>
						<div className="col-lg-11">
							<h1>Ryan Thorp</h1>
							<span>Front-end Developer</span>
						</div>
					</div>
					<div className="row">
						<ul className="profile-links">
							<li><HeaderLink to="/app_dev.php/profile/personal-details/">Personal Details</HeaderLink></li>
							<li><HeaderLink to="/app_dev.php/profile/work-details/">Work Details</HeaderLink></li>
							<li><HeaderLink to="/app_dev.php/profile/education/">Education</HeaderLink></li>
							<li><HeaderLink to="/app_dev.php/profile/emerancy/">Emergancy</HeaderLink></li>
							<li><HeaderLink to="/app_dev.php/profile/leave-and-absence/">Leave & Absence</HeaderLink></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
};


	