import React from 'react';
import { PropTypes } from 'react-prop-types';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, browserHistory, IndexRedirect, IndexRoute } from 'react-router-dom';

import App from './containers/App';
import Home from './scenes/Home/';
import PeopleManagement from './scenes/PeopleManagement/';
import Dashboard from './scenes/Dashboard/';

import Profile from './scenes/Profile/';

const Root = ({ store }) => (
  <Provider store={store}>
	<Router history={browserHistory}>
		<App>

			<Route exact={true} path='/app_dev.php/dashboard' component={Dashboard} />
			<Route path='/app_dev.php/people-management' component={PeopleManagement} />
			<Route path='/app_dev.php/profile' component={Profile} />

		</App>
	</Router>
  </Provider>
);

// Root.propTypes = {
//   store: PropTypes.object.isRequired,
// };

export default Root;