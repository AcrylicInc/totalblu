import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import { matchPath } from 'react-router'

import ProfileAvatar from 'components/profileAvatar';
import { BrowserRouter as Router, Route, Switch, browserHistory, IndexRedirect, IndexRoute } from 'react-router-dom';
import PeopleManagement from 'scenes/PeopleManagement/';

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
						<ul className="navigation-links">
						{this.props.subNav.map((route, index) => (
							<li>
				          	<NavLink
					            key={index +'navroute'}
					            to={`${route.link}`}
					            activeClassName="active" 
				          	>{`${route.text}`}</NavLink>
			
				          	<Route
					            key={index + 100}
					            path={route.path}
					            exact={route.exact}
					            component={route.main}
				         	/>
				         	</li>
				        ))}
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


	