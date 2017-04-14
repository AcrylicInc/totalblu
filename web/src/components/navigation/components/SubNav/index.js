import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

// require('./style.scss');


const HeaderLink = (props) => (
	<NavLink {...props} activeClassName="active" />
);

export default class SubNav extends Component {
	constructor(props) {
		super(props);

	}
	
	getMenuLinks(){
		let subLinks = [
			{ linkName : "Overview", linkHref : "#" },
			{ linkName : "Overview", linkHref : "#" },
		];
		
		let linkWrapper = document.createElement('ul');

		subLinks.map( (item,index) => {
			let link = document.createElement('a');
			link.href = item.linkHref;		
			link.textContent = item.linkName;		

			linkWrapper.appendChild(link);
		}); 

		return linkWrapper;
	}

	render() {

		
		return (
			<div className="sub-nav">
			</div>
		);
	}
};


// <li><HeaderLink to="/app_dev.php/">Home</HeaderLink></li>
// 							<li><HeaderLink to="/app_dev.php/dashboard">dashboard</HeaderLink></li>
// 							<li><HeaderLink to="/app_dev.php/profile">profile</HeaderLink></li>

	