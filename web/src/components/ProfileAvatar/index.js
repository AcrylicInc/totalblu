import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

require('./style.scss');


export default class ProfileAvatar extends Component {
	constructor(props) {
		super(props);

	}
	getProfileInitials() {
		let profileMeta = this.props.userName.split(" ");

		let firstInitial = profileMeta[0].charAt(0);
		let lastInitial = profileMeta[profileMeta.length - 1].charAt(0);
		return (firstInitial+lastInitial);
	}

	render() {
		return (
			<div className="profile-avatar">
				<NavLink id="userViewProfile" to={`/app_dev.php/profile/${this.props.userId}`}>
					<span>{this.getProfileInitials()}</span>
				</NavLink>
			</div>
		);
	}
};


	