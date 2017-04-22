import React, {Component} from 'react';

import Navigation from 'components/Navigation/';

export default class Dashboard extends Component {
	componentDidMount() {
	    document.title = "Dashboard";
	}
	render() {
	const links = [
		{
		    exact: true,
		    text: 'Overview',
			link: '/app_dev.php/profile'
		}
	]

		return (
			<div className="app">
				<header>
					<Navigation 
						subNav={ links } 
					/>
				</header>
				<div className="app-container">
					<div className="row">
						<div className="col-lg-9">
						Dashhy board
							{this.props.children}
						</div>
						<div className="col-lg-3">
						</div>
					</div>
				</div>
			</div>
		);
	}
}