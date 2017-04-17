import React, {Component} from 'react';
import { PropTypes } from 'react-prop-types';

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

		return (
			<div className="app-container">
				<div className="row">
					<div className="col-lg-9">
						<ProfilePanel />
						{this.props.children}
					</div>
					<div className="col-lg-3">
						<ProfileReports />
					</div>
				</div>
			</div>
		);
	}
}