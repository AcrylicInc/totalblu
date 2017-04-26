import React, { Component } from 'react';
import { PropTypes } from 'react-prop-types';

import createFragment from 'react-addons-create-fragment';
import PageView from './PageView';

require('./style.scss');

class Pagination extends Component {
  constructor(props) {
	super(props);
	this.state = {
	  selected: 0
	};
  }
  onPageChange(val){

	console.log(val, this.props.pageCount);

	if ( val > this.props.pageCount || val < 1 ) return false;

	this.props.onPageChange( val );
  }
  pagination() {
	let items = {};

	if (this.props.pageCount <= this.props.pageRangeDisplayed) {

	  for (let index = 0; index < this.props.pageCount; index++) {
		items['key' + index] = <PageView
		  onPageChange={(val) => this.onPageChange(val)}
		  selected={this.props.currentPage === index}
		  pageClassName={this.props.pageClassName}
		  pageLinkClassName={this.props.pageLinkClassName}
		  activeClassName={this.props.activeClassName}
		  page={index + 1} />
	  }

	} 

	return items;
  };

  render() {
	const previousClasses = this.props.currentPage === 0 ? 'disabled' : '';
	const nextClasses = this.props.currentPage === this.props.pageCount - 1 ? 'disabled' : '';
	
	return (
	  <ul className={this.props.containerClassName}>
		<li className={previousClasses}>
		  <a onClick={(val) => this.onPageChange( this.props.currentPage - 1 )}
			 className="prev"
			 tabIndex="0"
			 onKeyPress={this.handlePreviousPage}>
			&lt;
		  </a>
		</li>

		{createFragment(this.pagination())}

		<li className={nextClasses}>
		  <a onClick={(val) => this.onPageChange( this.props.currentPage + 1 )}
			 className="next"
			 tabIndex="0"
			 onKeyPress={this.handleNextPage}>
			&gt;
		  </a>
		</li>
	  </ul>
	);
  }
};

Pagination.propTypes = {
	onPageChange: React.PropTypes.func.isRequired,
};

export default Pagination;