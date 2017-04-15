import React, {Component} from 'react';

require('./style.scss');


export default class ProfileAvatar extends Component {
	constructor(props) {
		super(props);

	}
	getProfileInitials() {
		let profileMeta = {'name' : 'Ryan Thorp'};
		let splitName = profileMeta.name.split(" ");

		let firstInitial = splitName[0].charAt(0);
		let lastInitial = splitName[splitName.length - 1].charAt(0);

		return firstInitial+lastInitial;
	}

	render() {
		return (
			<div className="profile-avatar">
				<a href="/profile">
					<span>{this.getProfileInitials()}</span>
				</a>
			</div>
		);
	}
};


	