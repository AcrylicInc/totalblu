import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import ProfileAvatar from 'components/profileAvatar';
import { BrowserRouter as Router, Route, Switch, browserHistory, IndexRedirect, IndexRoute } from 'react-router-dom';

// require('./style.scss');


export default class People extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			users: [
				{	
					"id" : 1,
					"name" : "Ryan Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 2,
					"name" : "Ryan Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 3,
					"name" : "Ryan Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 4,
					"name" : "Ryan Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 5,
					"name" : "Ryan Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				}
			],
	    };

	}

	render() {
		return (
			<div className="profile-panel block">
				{ this.state.users.map( users => {
					return ( 
					<div className="profile-panel block"
					key={users.id}
					{...users} >
						{users.name}
					</div>						
					)
				})}
			</div>
		);
	}
};


	