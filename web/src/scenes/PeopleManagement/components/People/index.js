import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';
import ReactPaginate from 'react-paginate';
import { BrowserRouter as Router, Route, Switch, browserHistory, IndexRedirect, IndexRoute } from 'react-router-dom';

import ProfileAvatar from 'components/profileAvatar';


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
					"name" : "Ryan Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 3,
					"name" : "Ryan Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 4,
					"name" : "Ryan Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 5,
					"name" : "Ryan Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 6,
					"name" : "Ryan Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 7,
					"name" : "Ryan Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 8,
					"name" : "Ryan Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 9,
					"name" : "Ryan Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 10,
					"name" : "Ryan Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 11,
					"name" : "Ryan Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 12,
					"name" : "Ryan Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 13,
					"name" : "Ryan Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				},
				{
					"id" : 14,
					"name" : "Ryan Thorp",
					"jobTitle" : "Front-end Developer",
					"Department" : "IT",
					"Office" : "Bedford",
				}
			],
			offset: 0,
			search: "",
			pageCount: 0
	    };
	}
	componentWillMount() {
		this.setState({ pageCount: Math.ceil(this.state.users.length / 5) });
		
	}
	searchChange( event ){
		let user = event.target.value;

		this.setState({search: user});

		this.updateUsers(user);
	}

	updateUsers(queriedUser){

		this.state.users.forEach( (user, index) => {
			
			if ( user.lastIndexOf(queriedUser, 0) === 0 ){
				console.log(user);
			}

		});

	}

	handlePageClick = (data) => {
	    let selected = data.selected;
	    let offset = Math.ceil(selected * this.props.perPage);

	    this.setState({offset: offset}, () => {
	      this.loadCommentsFromServer();
	    });
	  };
	logChange(val){
	}

	render() {

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
								<input className="outline-grey" type="text" value={this.state.search} onChange={ () => { this.searchChange(event) } } />
							</form>
						</div>
						<div className="controller row">
							<div class="col-lg-2 middle-xs">
								{this.state.users.length} Employees
							</div>

							<div class="col-lg-10 middle-xs">
								<ReactPaginate previousLabel={"previous"}
			                       nextLabel={"next"}
			                       breakLabel={<a href="">...</a>}
			                       breakClassName={"break-me"}
			                       pageCount={this.state.users}
			                       marginPagesDisplayed={0}
			                       pageRangeDisplayed={0}
			                       onPageChange={ () => this.handlePageClick(event) }
			                       containerClassName={"pagination"}
			                       subContainerClassName={"pages pagination"}
			                       activeClassName={"active"} />
							</div>
						</div>
						{ this.state.users.map( users => {
							return ( 
							<div className="people-row row middle-xs outline-grey"
	 						key={users.id}
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


	