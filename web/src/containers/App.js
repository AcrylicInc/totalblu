import React, {Component} from 'react';
import { PropTypes } from 'react-prop-types';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import {connect} from 'react-redux';

import * as ActionCreators from '../components/navigation/components/Navigation/actions';

import Navigation from '../components/navigation/components/Navigation/index';
import Sidebar from '../components/navigation/components/Sidebar/index';

import PeopleManagement from 'scenes/PeopleManagement/';

require('./layout.scss');
require('./style.scss');


class App extends Component {

	// static propTypes = {
	// 	children: PropTypes.array.isRequired,
	// };
	constructor(props) {
		super(props);

	}
	getDynamicSubnav(path) {
		let links = [];

		if ( path.indexOf('dashboard') >= 1  ){
			links = [
				{
					path: '/',
				    exact: true,
				    sidebar: () => <div>home!</div>,
				    main: () => <h2>Home</h2>
				}
			];
		} else if ( path.indexOf('people-management') >= 1 ) {
			links = [
				{
					path: '/',
				    exact: true,
				    text: 'People',
					link: '/app_dev.php/people-management/people',
				    main: () => <PeopleManagement />
				},
				{
					path: '/',
				    exact: true,
				    text: 'Departments',
					link: '/app_dev.php/people-management/departments',
				    main: () => <PeopleManagement />
				},
				{
					path: '/',
				    exact: true,
				    text: 'Offices',
					link: '/app_dev.php/people-management/offices',
				    main: () => <PeopleManagement />
				}
			]
		} else {
			links = [];
		}

		return links;
	}

	render() {
		const { dispatch, navigation, children} = this.props;
		// const openModal = bindActionCreators(ActionCreators.openModal, dispatch);
		const subNavLinks = this.getDynamicSubnav(this.props.location.pathname); 

		return (
			<div className="totalblu-hr">
				<header>
					<Sidebar />
					<Navigation 
					subNav={ subNavLinks } />
				</header>
				{this.props.children}
			</div>
		);
	}
}

const mapStateToProps = state => (
	{
		navigation: state.navigation,
	}
);

export default withRouter(connect(mapStateToProps)(App));
