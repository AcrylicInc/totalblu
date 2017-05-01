import React, {Component} from 'react';
import { PropTypes } from 'react-prop-types';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch, browserHistory, IndexRedirect, IndexRoute } from 'react-router-dom';


import Navigation from 'components/Navigation/';

import Calendar from './components/Calendar/';

import * as ActionCreators from './actions';

require('./style.scss');

class Planner extends Component {
	constructor(props) {
		super(props);

	}
	
	componentDidMount() {
	    document.title = "Planner";
	}
	render() {
		const { dispatch, users, children} = this.props;
		const links = [
			{
			    text: 'Monthly',
				link: '/app_dev.php/planner',
			    main: Calendar
			},
			{
			    text: 'Weekly',
				link: '/app_dev.php/planner/weekly',
			    main: Calendar
			},
			{
			    text: 'Daily',
				link: '/app_dev.php/planner/daily',
			    main: Calendar
			}
		]

		return (
			<div className="app">
				<header>
					<Navigation
						pageTitle={"Planner"}
						subNav={ links } 
					/>
				</header>
				<div className="app-container row">
					<div className="col-lg-12">
				        <Route path={links[0].link} exact component={() => ( <Calendar {...this.state} /> )} />
				        <Route path={links[1].link} exact component={() => ( <Calendar {...this.state} /> )} />
				        <Route path={links[2].link} exact component={() => ( <Calendar {...this.state} /> )} />
					</div>
				</div>
			</div>
		);
	}
}


export default Planner;
