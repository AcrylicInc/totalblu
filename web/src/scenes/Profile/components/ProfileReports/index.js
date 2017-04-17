import React, {Component} from 'react';

import ProfileAvatar from 'components/profileAvatar';

require('./style.scss');


export default class ProfileReports extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<aside className="profile-reports block">
				<div className="block-wrapper">
					<h4>Managers</h4>
					<div className="row">
						<div className="col-lg-3">
							<ProfileAvatar userId={1} userName={"Ryan Thorp"} />
						</div>

						<div className="col-lg-3">
							<ProfileAvatar userId={1} userName={"Sam White"} />
						</div>
						
						<div className="col-lg-3">
							<ProfileAvatar userId={1} userName={"Tiny Tim"} />
						</div>

						<div className="col-lg-3">
							<ProfileAvatar userId={1} userName={"Owain George"} />
						</div>
						
					</div>

					<h4>Direct Reports</h4>
					<div className="row">
						<div className="col-lg-3">
							<ProfileAvatar userId={1} userName={"Ryan Thorp"} />
						</div>

						<div className="col-lg-3">
							<ProfileAvatar userId={1} userName={"Sam White"} />
						</div>
						
						<div className="col-lg-3">
							<ProfileAvatar userId={1} userName={"Tiny Tim"} />
						</div>

					{this.props.children}
					</div>
				</div>
			</aside>
		);
	}
};


	