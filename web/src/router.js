import React from 'react';
import { BrowserRouter as Router, Route, browserHistory, IndexRedirect } from 'react-router-dom';

import App from './containers/App';
import Home from './scenes/Home/Home';
import Dashboard from './scenes/Dashboard/Dashboard';
import Profile from './scenes/Profile/Profile';

const routes = (
	<Router history={browserHistory}>
		<App> 
			<Route exact={true} path="/app_dev.php/" component={Home} />
			<Route exact={true} path="/app_dev.php/dashboard" component={Dashboard} />
			<Route exact={true} path="/app_dev.php/profile" component={Profile} />
		</App>
	</Router>
);

	// <Route exact={true} path="/parentlink" component={Dashboard} > 
	// 	<IndexRedirect to={sublink} />
	// 	<Route path="sublink" component={sublink} />
	// <Route />


export default routes;