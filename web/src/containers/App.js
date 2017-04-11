import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as ActionCreators from '../components/navigation/components/Header/actions';
import Navigation from '../components/navigation/components/Navigation/index';
import Sidebar from '../components/navigation/components/Sidebar/index';

require('./layout.scss');
require('./style.scss');


class App extends Component {

	static propTypes = {
		navigation: PropTypes.array.isRequired,
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
		header: state.header,
	}
);

export default connect(mapStateToProps)(App);
