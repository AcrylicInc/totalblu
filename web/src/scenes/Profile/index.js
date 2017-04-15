import React, {Component} from 'react';

import ProfilePanel from './components/ProfilePanel/';
import ProfileReports from './components/ProfileReports/';

export default class Profile extends Component {
	render() {
		return (
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
		);
	}
}