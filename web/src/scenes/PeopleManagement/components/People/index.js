import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';
import ReactPaginate from 'react-paginate';
import { BrowserRouter as Router, Route, Switch, browserHistory, IndexRedirect, IndexRoute } from 'react-router-dom';

import ProfileAvatar from 'components/profileAvatar';
import Pagination from 'components/Pagination';


require('./style.scss');


export default class People extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [
				{	
					"id" : 1,
					"name" : "Ryan Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 2,
					"name" : "Sam Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 3,
					"name" : "Aron Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 4,
					"name" : "Billy Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 5,
					"name" : "Andy Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 6,
					"name" : "Tony Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 7,
					"name" : "Greg Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 8,
					"name" : "Mark Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 9,
					"name" : "James Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 10,
					"name" : "Ronny Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 11,
					"name" : "Harry Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 12,
					"name" : "William Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 13,
					"name" : "Ash Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 14,
					"name" : "Charlie Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				}
			],
			offset: 0,
			search: "",
			page: 1,
			pageCount: 0,
			usersPerPage: 5,
			maxPage: 1
	    };
	}
	componentDidMount() {
		this.setState({ pageCount: Math.ceil(this.state.users.length / 5) });
		
		let orderedResults = this.state.users.sort( (a, b) => {
			if (a.name !== null && b.name !== null){
			    var textA = a.name.toUpperCase();
			    var textB = b.name.toUpperCase();
			    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
			}
		});

		this.setState({ 
			users: orderedResults,
			maxPage: Math.ceil(orderedResults.length / this.state.usersPerPage),
		 });

	}

	filterResults(){
		let res = this.state.users.slice();

		res = !this.state.search.trim().length ? res : res.filter(r => { if (r.name !== null){ return r.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1; }});
		
		return res;
	}

	paginateResults(array) {
		// Pagination
		let start = (this.state.page - 1) * this.state.usersPerPage,
			end = start + this.state.usersPerPage;

		return array.slice(start, end);
	}

	searchChange( event ){
		let user = event.target.value;

		this.setState({search: user});
	}

	handlePageChange(data) {
		let maxPage = Math.ceil(this.filterResults().length / this.state.perPage);
		if( newPage < 1 || newPage > maxPage || newPage == this.state.page) return false;

	    this.setState({
			page: parseInt(newPage),
		});

	};

	logChange(val){
	}

	render() {
		let users = this.filterResults();
		let pages = this.paginateResults(users);

		const ShowOptions = [
			{ value: 'all', label: 'All employees'},
			{ value: 'managers', label: 'Managers'}
		];

		return (
			<div className="people-panel block row">

					<div className="col-lg-2">
						<div className="filters-siderbar outline-grey">
							<form>

								<fieldset>
									<label>Show</label>
									<Select
										name="form-field-name"
										value="one"
										clearable={false}
										searchable={false}
										multi={false}
										options={[
											{value: 'all', label: 'All employees'},
											{value: 'managers', label: 'Managers'},
											{value: 'employees', label: 'Employees'},
											{value: 'hierarchical', label: 'Hierarchical'}
										]}
										onChange={this.logChange()}
									/>
								</fieldset>

								<fieldset>
									<label>Sort by</label>
									<Select
										name="form-field-name"
										value="one"
										clearable={false}
										searchable={false}
										options={ShowOptions}
										onChange={this.logChange()}
									/>
								</fieldset>

								<fieldset>
									<label>Deparments</label>
									<Select
										name="form-field-name"
										value="one"
										clearable={false}
										options={ShowOptions}
										onChange={this.logChange()}
									/>
								</fieldset>

								<fieldset>
									<label>Locations</label>
									<Select
										name="form-field-name"
										value="one"
										clearable={false}
										options={ShowOptions}
										onChange={this.logChange()}
									/>
								</fieldset>

							</form>
						</div>
					</div>

					<div className="col-lg-10">
						<div className="search row">
							 <form>
								<label><i className="icon-search"></i></label>
								<input className="outline-grey" type="text" value={this.state.search} onChange={ (event) => { this.searchChange(event) } } />
							</form>
						</div>
						<div className="controller row">
							<div className="col-lg-2 middle-xs">
								{users.length} Employees
							</div>


							<div className="col-lg-10 middle-xs">

							<Pagination  
								previousLabel={"previous"}
								currentPage={this.props.page}
					        	nextLabel={"next"}
					        	breakLabel={"..."}
					        	breakClassName={"break-me"}
					        	pageCount={this.props.maxPage}
					        	marginPagesDisplayed={2}
					        	pageRangeDisplayed={4}
					       		onPageChange={(val) => this.handlePageChange(val)}
					       		containerClassName={"pagination"}
					        	subContainerClassName={"pages pagination"}
					       		activeClassName={"active"} /> 

							</div>
						</div>
						{ pages.map( (users, index) => {
							return ( 
							<div className="people-row row middle-xs outline-grey"
	 						key={index}
							{...users} >
								<ProfileAvatar 
								userName={users.name} />
								<div className="people-name">
									{users.name}
								</div>
								<div className="people-job">
									{users.jobTitle}
								</div>
								<div className="people-link">
									<NavLink to="/profile/${users.id}"><i className="icon-right-open"></i></NavLink>
								</div>						
							</div>						
							)
						})}
					</div>
			</div>
		);
	}
};


	