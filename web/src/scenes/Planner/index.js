import React, {Component} from 'react';
import { PropTypes } from 'react-prop-types';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch, browserHistory, IndexRedirect, IndexRoute } from 'react-router-dom';
import moment from 'moment';


import Navigation from 'components/Navigation/';

import Calendar from './components/Calendar/';

import * as ActionCreators from './actions';

require('./style.scss');



class Planner extends Component {
	constructor(props) {
		super(props);

		Calendar.setLocalizer(
			Calendar.momentLocalizer(moment)
		);

		this.state = {
			events: [
			  {
			    'title': 'All Day Event',
			    'allDay': true,
			    'start': new Date(2015, 3, 0),
			    'end': new Date(2015, 3, 1)
			  },
			  {
			    'title': 'Long Event',
			    'start': new Date(2015, 3, 7),
			    'end': new Date(2015, 3, 10)
			  },

			  {
			    'title': 'DTS STARTS',
			    'start': new Date(2016, 2, 13, 0, 0, 0),
			    'end': new Date(2016, 2, 20, 0, 0, 0)
			  },

			  {
			    'title': 'DTS ENDS',
			    'start': new Date(2016, 10, 6, 0, 0, 0),
			    'end': new Date(2016, 10, 13, 0, 0, 0)
			  },

			  {
			    'title': 'Some Event',
			    'start': new Date(2015, 3, 9, 0, 0, 0),
			    'end': new Date(2015, 3, 9, 0, 0, 0)
			  },
			  {
			    'title': 'Conference',
			    'start': new Date(2015, 3, 11),
			    'end': new Date(2015, 3, 13),
			    desc: 'Big conference for important people'
			  },
			  {
			    'title': 'Meeting',
			    'start': new Date(2015, 3, 12, 10, 30, 0, 0),
			    'end': new Date(2015, 3, 12, 12, 30, 0, 0),
			    desc: 'Pre-meeting meeting, to prepare for the meeting'
			  },
			  {
			    'title': 'Lunch',
			    'start':new Date(2015, 3, 12, 12, 0, 0, 0),
			    'end': new Date(2015, 3, 12, 13, 0, 0, 0),
			    desc: 'Power lunch'
			  },
			  {
			    'title': 'Meeting',
			    'start':new Date(2015, 3, 12,14, 0, 0, 0),
			    'end': new Date(2015, 3, 12,15, 0, 0, 0)
			  },
			  {
			    'title': 'Happy Hour',
			    'start':new Date(2015, 3, 12, 17, 0, 0, 0),
			    'end': new Date(2015, 3, 12, 17, 30, 0, 0),
			    desc: 'Most important meal of the day'
			  },
			  {
			    'title': 'Dinner',
			    'start':new Date(2015, 3, 12, 20, 0, 0, 0),
			    'end': new Date(2015, 3, 12, 21, 0, 0, 0)
			  },
			  {
			    'title': 'Birthday Party',
			    'start':new Date(2015, 3, 13, 7, 0, 0),
			    'end': new Date(2015, 3, 13, 10, 30, 0)
			  }
			]
		}
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
			},
			{
			    text: 'Agenda',
				link: '/app_dev.php/planner/agenda',
			    main: Calendar
			}
		]
		let components = { event: 'Day' };
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
						<div className="planner block row">
					        <Route path={links[0].link} exact component={() => ( <Calendar events={this.state.events} view={'month'} defaultDate={new Date(2015, 3, 1)} /> )} />
					        <Route path={links[1].link} exact component={() => ( <Calendar events={this.state.events} view={'week'} defaultDate={new Date(2015, 3, 1)} /> )} />
					        <Route path={links[2].link} exact component={() => ( <Calendar events={this.state.events} view={'day'} defaultDate={new Date(2015, 3, 1)} /> )} />
					        <Route path={links[2].link} exact component={() => ( <Calendar events={this.state.events} view={'agenda'} defaultDate={new Date(2015, 3, 1)} /> )} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default Planner;
