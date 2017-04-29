import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'react-prop-types';

import { matchPath } from 'react-router'

import ProfileAvatar from 'components/profileAvatar';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';

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
							<h1>{this.props.pageTitle}</h1>
						</div>
						<ul className="navigation-links">
						{this.props.subNav.map((route, index) => (
							<li>
				          	<NavLink
					            key={index}
					            to={`${route.link}`}
					            activeClassName="active" 
					            exact
				          	>{`${route.text}`}</NavLink>
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

Navigation.propTypes = {
	pageTitle: React.PropTypes.string.isRequired,
};

	