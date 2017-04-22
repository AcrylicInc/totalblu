import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import ProfileAvatar from 'components/profileAvatar';
import { BrowserRouter as Router, Route, Switch, browserHistory, IndexRedirect, IndexRoute } from 'react-router-dom';

require('./style.scss');


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
			search: "",
	    };

	}
	searchChange( target ){
		console.log(target);
	}
	render() {
		return (
			<div className="people-panel block">
				<div className="row">
					<div className="col-lg-2">

					</div>
					<div className="col-lg-10">
						<div className="search">
							 <form>
								<label>Test</label>
								<input type="text" value={this.state.search} onChange={this.searchChange()} />
							</form>
						</div>
						{ this.state.users.map( users => {
							return ( 
							<div className="people-row row middle-lg"
	 						key={users.id}
							{...users} >
								<ProfileAvatar 
								userName={users.name} />
								<div className="people-name">
									{users.name}
								</div>
								<div className="people-job">
									{users.jobTitle}
								</div>
							</div>						
							)
						})}
					</div>
				</div>
			</div>
		);
	}
};


	