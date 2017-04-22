import React, {Component} from 'react';
import { PropTypes } from 'react-prop-types';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import {connect} from 'react-redux';

import * as ActionCreators from '../components/Navigation/actions';

import Sidebar from '../components/Sidebar/index';


require('./layout.scss');
require('./style.scss');


class App extends Component {

	// static propTypes = {
	// 	children: PropTypes.array.isRequired,
	// };
	constructor(props) {
		super(props);

	}
	render() {
		const { dispatch, navigation, children} = this.props;
		// const openModal = bindActionCreators(ActionCreators.openModal, dispatch);

		return (
			<div className="totalblu-hr">
				<Sidebar />
				{this.props.children}
			</div>
		);
	}
}

const mapStateToProps = state => (
	{
		navigation: state.navigation,
	}
);

export default withRouter(connect(mapStateToProps)(App));
