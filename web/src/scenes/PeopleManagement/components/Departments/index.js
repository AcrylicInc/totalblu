import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import Pagination from 'components/Pagination';

import { BrowserRouter as Router, Route, Switch, browserHistory, IndexRedirect, IndexRoute } from 'react-router-dom';

require('./style.scss');


export default class Departments extends Component {
	constructor(props) {
		super(props);

		this.state = {
			departments: [
				{	
					"id" : 1,
					"name" : "Finance",
					"employees" : 42,
					"managerName" : "Ryan Thorp",
					"managerID" : 1,
					"location" : "Bedford",
					"contactEmails" : [ 'test@test.com' ],
					"contactNumbers" : [ '012345678910' ]
				},
				{
					"id" : 2,
					"name" : "Finance",
					"employees" : 42,
					"managerName" : "Ryan Thorp",
					"managerID" : 1,
					"location" : "Bedford",
					"contactEmails" : [ 'test@test.com' ],
					"contactNumbers" : [ '012345678910' ]
				},
				{
					"id" : 3,
					"name" : "Finance",
					"employees" : 42,
					"managerName" : "Ryan Thorp",
					"managerID" : 1,
					"location" : "Bedford",
					"contactEmails" : [ 'test@test.com' ],
					"contactNumbers" : [ '012345678910' ]
				},
				{
					"id" : 4,
					"name" : "Finance",
					"employees" : 42,
					"managerName" : "Ryan Thorp",
					"managerID" : 1,
					"location" : "Bedford",
					"contactEmails" : [ 'test@test.com' ],
					"contactNumbers" : [ '012345678910' ]
				},
				{
					"id" : 5,
					"name" : "Finance",
					"employees" : 42,
					"managerName" : "Ryan Thorp",
					"managerID" : 1,
					"location" : "Bedford",
					"contactEmails" : [ 'test@test.com', 'test2@test.com' ],
					"contactNumbers" : [ '012345678910' ]
				},
				{
					"id" : 6,
					"name" : "Finance",
					"employees" : 42,
					"managerName" : "Ryan Thorp",
					"managerID" : 1,
					"location" : "Bedford",
					"contactEmails" : [ 'test@test.com', 'test2@test.com' ],
					"contactNumbers" : [ '012345678910' ]
				},
				{
					"id" : 7,
					"name" : "Finance",
					"employees" : 42,
					"managerName" : "Ryan Thorp",
					"managerID" : 1,
					"location" : "Bedford",
					"contactEmails" : [ 'test@test.com', 'test2@test.com' ],
					"contactNumbers" : [ '012345678910' ]
				},
				{
					"id" : 8,
					"name" : "Finance",
					"employees" : 42,
					"managerName" : "Ryan Thorp",
					"managerID" : 1,
					"location" : "Bedford",
					"contactEmails" : [ 'test@test.com', 'test2@test.com' ],
					"contactNumbers" : [ '012345678910' ]
				},
				{
					"id" : 9,
					"name" : "Finance",
					"employees" : 42,
					"managerName" : "Ryan Thorp",
					"managerID" : 1,
					"location" : "Bedford",
					"contactEmails" : [ 'test@test.com', 'test2@test.com' ],
					"contactNumbers" : [ '012345678910' ]
				},
				{
					"id" : 10,
					"name" : "Finance",
					"employees" : 42,
					"managerName" : "Ryan Thorp",
					"managerID" : 1,
					"location" : "Bedford",
					"contactEmails" : [ 'test@test.com', 'test2@test.com' ],
					"contactNumbers" : [ '012345678910' ]
				},
				{
					"id" : 11,
					"name" : "Finance",
					"employees" : 42,
					"managerName" : "Ryan Thorp",
					"managerID" : 1,
					"location" : "Bedford",
					"contactEmails" : [ 'test@test.com', 'test2@test.com' ],
					"contactNumbers" : [ '012345678910' ]
				},
				{
					"id" : 12,
					"name" : "Finance",
					"employees" : 42,
					"managerName" : "Ryan Thorp",
					"managerID" : 1,
					"location" : "Bedford",
					"contactEmails" : [ 'test@test.com', 'test2@test.com' ],
					"contactNumbers" : [ '012345678910' ]
				},
				{
					"id" : 13,
					"name" : "Finance",
					"employees" : 42,
					"managerName" : "Ryan Thorp",
					"managerID" : 1,
					"location" : "Bedford",
					"contactEmails" : [ 'test@test.com', 'test2@test.com' ],
					"contactNumbers" : [ '012345678910' ]
				},
				{
					"id" : 14,
					"name" : "Finance",
					"employees" : 42,
					"managerName" : "Ryan Thorp",
					"managerID" : 1,
					"location" : "Bedford",
					"contactEmails" : [ 'test@test.com' ],
					"contactNumbers" : [ '012345678910' ]
				}
			],
			offset: 0,
			search: "",
			show: "all",
			sort: "all",
			department: "all",
			location: "all",
			page: 1,
			pageCount: 0,
			departmentsPerPage: 6,
			maxPage: 1
	    };	
	}

	componentDidMount() {
		this.setState({ pageCount: Math.ceil(this.state.departments.length / 5) });
		
		let orderedResults = this.state.departments.sort( (a, b) => {
			if (a.name !== null && b.name !== null){
			    var textA = a.name.toUpperCase();
			    var textB = b.name.toUpperCase();
			    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
			}
		});

		this.setState({ 
			departments: orderedResults,
			maxPage: Math.ceil(orderedResults.length / this.state.departmentsPerPage),
		 });
	}

	filterResults(){
		let res = this.state.departments.slice();

		const show = this.state.show === 'all' ? 'all' : this.state.show;
		const sort = this.state.sort === 'all' ? 'all' : this.state.sort;
		const department = this.state.department === 'all' ? 'all' : this.state.department;
		const location = this.state.location === 'all' ? 'all' : this.state.location;

		// res = res.filter( item => {
		// 	if ( department === 'all' || item.department === department ) return item;
		// });

		res = !this.state.search.trim().length ? res : res.filter(r => { if (r.name !== null){ return r.name.toLowerCase().indexOf( this.state.search.toLowerCase() ) > -1; }});
		return res;
	}

	paginateResults(array) {
		// Pagination
		let start = (this.state.page - 1) * this.state.departmentsPerPage,
			end = start + this.state.departmentsPerPage;

		return array.slice(start, end);
	}

	searchChange( event ){
		this.setState({search: event.target.value});
	}
	
	handlePageChange(data) {
	    this.setState({ page: parseInt(data) });
	}

	render() {
		let departments = this.filterResults();
		let pages = this.paginateResults(departments);
		let currentPage = this.state.page;
		let maxPage = Math.ceil(departments.length / this.state.departmentsPerPage);

		return (
			<div className="department-panel block row">
					<div className="col-lg-2">
						<div className="filters-siderbar outline-grey">

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
								{departments.length} Departments
							</div>

							<div className="col-lg-10 middle-xs end-lg">

								<Pagination  
								currentPage={currentPage}
					        	pageCount={maxPage}
					        	marginPagesDisplayed={0}
					        	pageRangeDisplayed={0}
					       		onPageChange={(val) => this.handlePageChange(val)}
					       		containerClassName={"pagination"}
					       		activeClassName={"active"} /> 

							</div>
						</div>
						
						<div className="row departments-row">
						{ pages.map( (departments, index) => {
				
							return (
								<div className="col-md-4 middle-xs" key={index} >
									<div className="departments-block outline-grey">
										<div className="row">
											<div className="col-md-3">
												<h5>{departments.name}</h5>
												<p><i>{departments.location}</i></p>
											</div>

											<div className="col-md-4">
												<h5>Department Head</h5>
													<NavLink to={"/profile/" + departments.managerID}>{departments.managerName}</NavLink>
											</div>

											<div className="col-md-5">
												<h5>Contact Information</h5>
												{ 
													departments.contactEmails.map( (email, index) => {
														return <a href={"mailto:" + email} key={index}>{email}</a>
													})
												}
												{ 
													departments.contactNumbers.map( (number, index) => {
														return <a href={"tel:" + number} key={index}>{number}</a>
													})
												}
											</div>
										</div>

										<div className="row" style={{marginTop: "auto"}}>
											<div className="col-md-12">
												<a className="btn" href="">Email all</a>
												<NavLink className="btn btn-grey-outline" to={"/departments/" + departments.id}>Edit departments</NavLink>
											</div>
										</div>				
									</div>						
								</div>						
							)
						})}
						</div>
						<div className="controller row">
							<div className="col-lg-2 middle-xs">
								{departments.length} Departments
							</div>

							<div className="col-lg-10 middle-xs end-lg">

								<Pagination  
								currentPage={currentPage}
					        	pageCount={maxPage}
					        	marginPagesDisplayed={0}
					        	pageRangeDisplayed={0}
					       		onPageChange={(val) => this.handlePageChange(val)}
					       		containerClassName={"pagination"}
					       		activeClassName={"active"} /> 

							</div>
						</div>
					</div>
			</div>
		);
	}
};


	