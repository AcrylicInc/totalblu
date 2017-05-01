import React, {Component} from 'react';
import { PropTypes } from 'react-prop-types';
import Navigation from 'components/Navigation/';

import ProfilePanel from './components/ProfilePanel/';
import ProfileReports from './components/ProfileReports/';

export default class Profile extends Component {
	constructor(props) {
		super(props);

	}
	
	componentDidMount() {
	    document.title = "Profile";
	}

	render() {
		const { children } = this.props;
		const links = [
			{
			    exact: true,
			    text: 'Overview',
				link: '/app_dev.php/profile'
			},
			{
			    exact: true,
			    text: 'Edit',
				link: '/app_dev.php/profile/edit'
			}
		]

		return (
			<div className="app">
				<header>
					<Navigation 
						pageTitle={"Profile"}
						subNav={ links } 
					/>
				</header>
				<div className="app-container">
					<div className="row">
						<div className="col-lg-9">
							<ProfilePanel />
						</div>
						<div className="col-lg-3">
							<ProfileReports />
						</div>
					</div>
				</div>
			</div>
		);
	}
}