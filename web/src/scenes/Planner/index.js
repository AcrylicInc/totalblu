import React, {Component} from 'react';
import { PropTypes } from 'react-prop-types';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch, browserHistory, IndexRedirect, IndexRoute } from 'react-router-dom';
import moment from 'moment';


import Navigation from 'components/Navigation/';
import Calendar from 'components/Calendar/';

import NewItem from './components/NewItem';

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
					'colour': '58a4f2',
					'group': 'meeting',
			    'start': new Date(2017, 3, 0),
			    'end': new Date(2017, 3, 1)
			  },
			  {
			    'title': 'Long Event',
					'colour': '58a4f2',
					'group': 'meeting',
			    'start': new Date(2017, 3, 7),
			    'end': new Date(2017, 3, 10)
			  },

			  {
			    'title': 'DTS STARTS',
					'colour': '58a4f2',
					'group': 'meeting',
			    'start': new Date(2016, 2, 13, 0, 0, 0),
			    'end': new Date(2016, 2, 20, 0, 0, 0)
			  },

			  {
			    'title': 'DTS ENDS',
					'colour': '58a4f2',
					'group': 'meeting',
			    'start': new Date(2016, 10, 6, 0, 0, 0),
			    'end': new Date(2016, 10, 13, 0, 0, 0)
			  },

			  {
			    'title': 'Some Event',
					'colour': '58a4f2',
					'group': 'meeting',
			    'start': new Date(2017, 3, 9, 0, 0, 0),
			    'end': new Date(2017, 3, 9, 0, 0, 0)
			  },
			  {
			    'title': 'Conference',
					'colour': '58a4f2',
					'group': 'meeting',
			    'start': new Date(2017, 3, 11),
			    'end': new Date(2017, 3, 13),
			    desc: 'Big conference for important people'
			  },
			  {
			    'title': 'Meeting',
					'colour': '58a4f2',
					'group': 'meeting',
			    'start': new Date(2017, 3, 12, 10, 30, 0, 0),
			    'end': new Date(2017, 3, 12, 12, 30, 0, 0),
			    desc: 'Pre-meeting meeting, to prepare for the meeting'
			  },
			  {
			    'title': 'Lunch',
					'colour': '58a4f2',
					'group': 'meeting',
			    'start':new Date(2017, 3, 12, 12, 0, 0, 0),
			    'end': new Date(2017, 3, 12, 13, 0, 0, 0),
			    desc: 'Power lunch'
			  },
			  {
			    'title': 'Meeting',
					'colour': '58a4f2',
					'group': 'meeting',
			    'start':new Date(2017, 3, 12,14, 0, 0, 0),
			    'end': new Date(2017, 3, 12,15, 0, 0, 0)
			  },
			  {
			    'title': 'Happy Hour',
					'colour': '58a4f2',
					'group': 'meeting',
			    'start':new Date(2017, 3, 12, 17, 0, 0, 0),
			    'end': new Date(2017, 3, 12, 17, 30, 0, 0),
			    desc: 'Most important meal of the day'
			  },
			  {
			    'title': 'Dinner',
					'colour': '58a4f2',
					'group': 'meeting',
			    'start':new Date(2017, 3, 12, 20, 0, 0, 0),
			    'end': new Date(2017, 3, 12, 21, 0, 0, 0)
			  },
			  {
			    'title': 'Birthday Party',
					'colour': '58a4f2',
					'group': 'meeting',
			    'start':new Date(2017, 3, 13, 7, 0, 0),
			    'end': new Date(2017, 3, 13, 10, 30, 0)
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
					        <Route path={links[0].link} exact component={() => ( <Calendar events={this.state.events} onView={'monthly'} view={'monthly'} defaultDate={new Date(2017, 3, 1)} /> )} />
					        <Route path={links[1].link} exact component={() => ( <Calendar events={this.state.events} onView={'weekly'} view={'weekly'} defaultDate={new Date(2017, 3, 1)} /> )} />
					        <Route path={links[2].link} exact component={() => ( <Calendar events={this.state.events} onView={'daily'} view={'daily'} defaultDate={new Date(2017, 3, 1)} /> )} />
									<Route path={links[2].link} exact component={() => ( <Calendar events={this.state.events} onView={'agenda'} view={'agenda'} defaultDate={new Date(2017, 3, 1)} /> )} />
					        <Route path={'/app_dev.php/planner/new-item'} exact component={() => ( <NewItem /> )} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default Planner;
