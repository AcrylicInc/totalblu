import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import ProfileAvatar from 'components/profileAvatar';
import { BrowserRouter as Router, Route, Switch, browserHistory, IndexRedirect, IndexRoute } from 'react-router-dom';

// require('./style.scss');


export default class Departments extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		return (
			<div className="profile-panel block">
				departments
			</div>
		);
	}
};


	