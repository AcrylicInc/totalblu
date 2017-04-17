import React, {Component} from 'react';
import { PropTypes } from 'react-prop-types';
import { withRouter } from 'react-router';
import {connect} from 'react-redux';

import PeopleRow from './components/PeopleRow/';
import * as ActionCreators from './actions';

class PeopleManagement extends Component {
	constructor(props) {
		super(props);
		
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

	 //    store.subscribe(() => {
	 //      this.setState({
	 //        users: store.getState().users
	 //      });
	 //    });

	}
	
	componentDidMount() {
	    document.title = "People Management";
	}

	render() {
		const { dispatch, users, children} = this.props;

		return (
			<div className="app-container">
				<div className="row">
					<div className="col-lg-12">
						
						{ this.state.users.map( users => {
							return ( 
							<PeopleRow 
								key={users.id}
								{...users}
							/> 
							)
						})}
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => (
	{
		users: state.users,
	}
);

export default connect(mapStateToProps)(PeopleManagement);
