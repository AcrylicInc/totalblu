import React, {Component} from 'react';
import Header from '../scenes/navigation/components/Header';

export default class App extends Component {
	render() {
		return (
			<div className="totalblu-hr">
				<Header />
				{ this.props.children }
			</div>
		);
	}
} 
		
		// { this.props.children } 