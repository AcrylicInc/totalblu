import React, {Component} from 'react';

export default class Dashboard extends Component {
	componentDidMount() {
	    document.title = "Dashboard";
	}
	render() {
		return (
			<div className="test">
				dashboard
			</div>
		);
	}
}