import React, {Component} from 'react';

import ProfileSidebar from './components/ProfileSidebar/index';

export default class Profile extends Component {
	render() {
		return (
			<div className="col-lg-3">
				<ProfileSidebar />
			</div>
		);
	}
}