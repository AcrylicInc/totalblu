import React, {Component} from 'react';

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
					<ul>
						<li>Test</li>
						<li>Test</li>
						<li>Test</li>
					</ul>

					<h4>Direct Reports</h4>
					<ul>
						<li>Test</li>
						<li>Test</li>
						<li>Test</li>
					</ul>
				</div>
			</aside>
		);
	}
};


	