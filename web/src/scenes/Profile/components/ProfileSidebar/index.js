import React, {Component} from 'react';

require('./style.scss');


export default class ProfileSidebar extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<aside className="profile-sidebar">
				<div className="profile-image">

				</div>
				<div className="profile-meta">
					<h3>Ryan Thorp</h3>
				</div>
			</aside>
		);
	}
};


	