import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'
import {connect} from 'react-redux';
import * as ActionCreators from '../components/navigation/components/Navigation/actions';
import Navigation from '../components/navigation/components/Navigation/index';
import Sidebar from '../components/navigation/components/Sidebar/index';

require('./layout.scss');
require('./style.scss');


class App extends Component {

	static propTypes = {
		children: PropTypes.array.isRequired,
	};

	render() {
		const { dispatch, navigation, children} = this.props;
		const openModal = bindActionCreators(ActionCreators.openModal, dispatch);
		

		return (
			<div className="totalblu-hr">
				<header>
					<Sidebar />
					<Navigation 
						openModal={openModal} />
				</header>
				{children}
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
