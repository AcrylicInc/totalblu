import React, { PropTypes } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router-dom';

import App from './containers/App';
import Home from './scenes/Home/Home';
import Dashboard from './scenes/Dashboard/Dashboard';


import Profile from './scenes/Profile/';
import PersonalDetails from './scenes/Profile/components/ProfilePanel/components/PersonalDetails';
import WorkDetails from './scenes/Profile/components/ProfilePanel/components/WorkDetails';
import Education from './scenes/Profile/components/ProfilePanel/components/Education';

const Root = ({ store }) => (
  <Provider store={store}>
	<Router history={browserHistory}>
		<App> 
			
			<Route exact={true} path='/app_dev.php/dashboard/' component={Dashboard} />

			<Route path='/app_dev.php/profile/' component={Profile}>
				<Route path='/app_dev.php/profile/personal-details/' component={PersonalDetails}  />
				<Route exact={true} path='/app_dev.php/profile/work-details' component={WorkDetails} />
				<Route exact={true} path='/app_dev.php/profile/education' component={Education} />
			</Route>

		</App>
	</Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;