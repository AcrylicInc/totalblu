import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import createFragment from 'react-addons-create-fragment'; // ES6

import SubNav from '../SubNav';
import ProfileAvatar from 'components/profileAvatar';

require('./style.scss');


const HeaderLink = (props) => (
	<NavLink {...props} activeClassName="active" />
);

export default class Navigation extends Component {
	constructor(props) {
		super(props);

	}

	getProfileInitials() {
		let profileMeta = {'name' : 'Ryan Thorp'};
		let splitName = profileMeta.name.split(" ");

		console.log(splitName);

		let firstInitial = splitName[0].charAt(0);
		let lastInitial = splitName[splitName.length - 1].charAt(0);

		return firstInitial+lastInitial;
	}
	getSubNav(){
		const subNavLinks = [
			{
				path: '/app_dev.php/dashboard',
				links: [
					{
						text: 'Overview',
						link: '/app_dev.php/dashboard'
					}
				]
			},
			{
				path: '/app_dev.php/people-management',
				links: [
					{
						text: 'People',
						link: '/app_dev.php/people-management/people'
					},
					{
						text: 'Departments',
						link: '/app_dev.php/people-management/departments'
					},
					{
						text: 'Offices',
						link: '/app_dev.php/people-management/offices'
					}
				]
			},
			{
				path: '/talent-acquisition',
				links: [
					{
						text: 'Overview',
						link: '/talent-acquisition'
					}
				]
			}
		];

	const pageURL = window.location.href;

	let subLinks = "";

		subNavLinks.forEach( (subNavLink, index) => {

			if ( !pageURL.indexOf( subNavLink.path ) >= 1 ) return false;
				
			subNavLink.links.forEach( (subNavlink, index) => {
				let text = '"' + subNavLink.link + '"';
				let link = <NavLink to={text} activeClassName="active">subNavLink.text</NavLink>;
				console.log( createFragment(link));

				subLinks += link;
			});
		});
	console.log(subLinks);
	return subLinks;

	}
	render() {

		const subNav = [
			{
				path: '/app_dev.php',
				links: [
					{
						text: 'Overview',
						link: '/app_dev.php/dashboard'
					}
				]
			},
			{
				path: '/app_dev.php/people-management',
				links: [
					{
						text: 'People',
						link: '/app_dev.php/people-management/people'
					},
					{
						text: 'Departments',
						link: '/app_dev.php/people-management/departments'
					},
					{
						text: 'Offices',
						link: '/app_dev.php/people-management/offices'
					}
				]
			},
			{
				path: '/talent-acquisition',
				links: [
					{
						text: 'Overview',
						link: '/talent-acquisition'
					}
				]
			}
		];

		return (
			<nav className="navigation-top">
				<div className="row">
					<div className="col-lg-11">
						<div className="navigation-page">
							<h1>Dashboard</h1>
						</div>
						<SubNav />
						<ul className="navigation-links">
							{ this.getSubNav() }
						</ul>
					</div>

					<div className="col-lg-1">
						<ProfileAvatar 
							userId={1}
							userName={"Ryan Thorp"}
							/>
					</div>
				</div>
			</nav>
		);
	}
};


	