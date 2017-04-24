import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import ProfileAvatar from 'components/profileAvatar';
import { BrowserRouter as Router, Route, Switch, browserHistory, IndexRedirect, IndexRoute } from 'react-router-dom';

import PersonalDetails from './components/PersonalDetails';
import WorkDetails from './components/WorkDetails';
import Education from './components/Education';
import Emergency from './components/Emergency';
import LeaveAbsence from './components/LeaveAbsence';


require('./style.scss');

const HeaderLink = (props) => (
	<NavLink {...props} activeClassName="active" />
);

export default class ProfilePanel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="profile-panel block">
				<div className="profile-meta block-wrapper">
					<div className="row">
						<div className="col-lg-1">
							<ProfileAvatar 
							userId={1}
							userName={"Ryan Thorp"}
							/>
						</div>
						<div className="col-lg-8">
							<h1>Ryan Thorp</h1>
							<span>Front-end Developer</span>
						</div>
						<div className="col-lg-3 middle-xs end-xs">
							<a className="btn btn-large btn-grey" href="mailto:ryan@akrylic.uk">Email</a>
						</div>
					</div>
					<div className="row">
						<ul className="profile-links">
							<li><HeaderLink to="/app_dev.php/profile">Personal Details</HeaderLink></li>

							<li><HeaderLink to="/app_dev.php/profile/work-details">Work Details</HeaderLink></li>

							<li><HeaderLink to="/app_dev.php/profile/education">Education</HeaderLink></li>

							<li><HeaderLink to="/app_dev.php/profile/emergency">Emergency</HeaderLink></li>

							<li><HeaderLink to="/app_dev.php/profile/leave-and-absence">Leave & Absence</HeaderLink></li>
						</ul>
					</div>
					<div className="row">
						<Route exact path='/app_dev.php/profile' component={PersonalDetails} />
						<Route path='/app_dev.php/profile/work-details' component={WorkDetails} />
						<Route path='/app_dev.php/profile/education' component={Education} />
						<Route path='/app_dev.php/profile/Emergency' component={Emergency} />
						<Route path='/app_dev.php/profile/leave-and-absence' component={LeaveAbsence} />
					</div>
				</div>
			</div>
		);
	}
};


	