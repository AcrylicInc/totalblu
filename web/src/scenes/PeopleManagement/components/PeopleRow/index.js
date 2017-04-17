import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import ProfileAvatar from 'components/profileAvatar';
import { BrowserRouter as Router, Route, Switch, browserHistory, IndexRedirect, IndexRoute } from 'react-router-dom';

// require('./style.scss');


export default class ProfilePanel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="profile-panel block">
				test
			</div>
		);
	}
};


	