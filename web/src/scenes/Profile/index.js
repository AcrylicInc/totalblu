import React, {Component} from 'react';
import { PropTypes } from 'react-prop-types';
import Navigation from 'components/Navigation/';

import ProfilePanel from './components/ProfilePanel/';
import ProfileReports from './components/ProfileReports/';

export default class Profile extends Component {
	constructor(props) {
		super(props);

	}
	
	// static propTypes = {
	// 	children: PropTypes.instanceOf(Profile).isRequired,
	// };

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