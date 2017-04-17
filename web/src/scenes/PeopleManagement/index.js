import React, {Component} from 'react';
import { PropTypes } from 'react-prop-types';

import PeopleRow from './components/PeopleRow/';

export default class Profile extends Component {
	constructor(props) {
		super(props);

	}
	
	componentDidMount() {
	    document.title = "People Management";
	}

	render() {
		const { children } = this.props;

		return (
			<div className="app-container">
				<div className="row">
					<div className="col-lg-12">
						{}
						<PeopleRow />
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}