import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as ActionCreators from '../components/navigation/components/Header/actions';
import Header from '../components/navigation/components/Header/index';

require('./layout.scss');
require('./style.scss');


class App extends Component {

	static propTypes = {
		header: PropTypes.array.isRequired,
		children: PropTypes.array.isRequired,
	};

	render() {
		const { dispatch, header, children} = this.props;
		const openModal = bindActionCreators(ActionCreators.openModal, dispatch);
		

		return (
			<div className="totalblu-hr">
				<Header 
					openModal={openModal} />
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
