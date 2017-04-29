import React, {Component} from 'react';
import { PropTypes } from 'react-prop-types';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch, browserHistory, IndexRedirect, IndexRoute } from 'react-router-dom';


import Navigation from 'components/Navigation/';

import People from './components/People/';
import Departments from './components/Departments/';
import Offices from './components/Offices/';

import * as ActionCreators from './actions';

require('./style.scss');

class PeopleManagement extends Component {
	constructor(props) {
		super(props);
	
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
		const links = [
			{
			    text: 'People',
				link: '/app_dev.php/people-management',
			    main: People
			},
			{
			    text: 'Departments',
				link: '/app_dev.php/people-management/departments',
			    main: Departments
			},
			{
			    text: 'Offices',
				link: '/app_dev.php/people-management/offices',
			    main: Offices,
			}
		]

		return (
			<div className="app">
				<header>
					<Navigation
						pageTitle={"People Management"}
						subNav={ links } 
					/>
				</header>
				<div className="app-container row">
					<div className="col-lg-12">
						{ links.map((route, index) => (
				          	<Route
					            key={index}
					            path={route.link}
					            exact
					            component={route.main}
				         	/>
						))}
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
