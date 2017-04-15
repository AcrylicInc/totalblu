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
			<Route exact={true} path="/app_dev.php/dashboard/" component={Dashboard}> 
				<Route path='overview' component={Home} />
			</Route>

			<Profile>
				<Route exact={true} path="/app_dev.php/profile/" component={PersonalDetails} />
				<Route path='/app_dev.php/profile/personal-details/' component={PersonalDetails} />
				<Route path='/app_dev.php/profile/work-details/' component={WorkDetails} />
				<Route path='/app_dev.php/profile/education/' component={Education} />
			</Profile>

		</App>
	</Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
	
	// {['/app_dev.php/', '/app_dev.php/dashboard'].map(path => 
	// 			<Route exact={true} path={path} component={Dashboard} >
	// 				<IndexRedirect to='/app_dev.php/overview' />
	// 				<Route path='/app_dev.php/overview' component={Home} />
	// 			</Route>
	// 		)}
	
	// <Route exact={true} path="/parentlink" component={Dashboard} > 
	// 	<IndexRedirect to={sublink} />
	// 	<Route path="sublink" component={sublink} />
	// <Route />


export default Root;