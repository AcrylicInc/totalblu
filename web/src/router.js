import React from 'react';
import { BrowserRouter as Router, Route, browserHistory, IndexRedirect } from 'react-router-dom';

import App from './containers/App';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';

const routes = (
	<Router history={browserHistory}>
		<App> 
			<Route exact={true} path="/app_dev.php/" component={Home} />
			<Route exact={true} path="/app_dev.php/dashboard" component={Dashboard} />
		</App>
	</Router>
);

	// <Route exact={true} path="/parentlink" component={Dashboard} > 
	// 	<IndexRedirect to={sublink} />
	// 	<Route path="sublink" component={sublink} />
	// <Route />


export default routes;