import React, { Component } from 'react';
import { PropTypes } from 'react-prop-types';

import createFragment from 'react-addons-create-fragment';

require('./style.scss');

class Pagination extends Component {
  constructor(props) {
	super(props);
	this.state = {
	  selected: 0
	};
  }
  onPageChange(val){

	if ( val > this.props.pageCount || val < 1 ) return false;

	this.props.onPageChange( val );
  }
 
   render() {
	const previousClasses = this.props.currentPage === 0 ? 'disabled' : '';
	const nextClasses = this.props.currentPage === this.props.pageCount - 1 ? 'disabled' : '';
	const currentPage = this.props.currentPage;
	
	return (
	  <ul className={this.props.containerClassName}>
		<li className={previousClasses}>
		  <a onClick={(val) => this.onPageChange( 1 )}
			 className="firstPage"
			 tabIndex="0"
			 onKeyPress={this.handlePreviousPage}>
			<i className="fa fa-step-backward" aria-hidden="true"></i>
		  </a>
		</li>

		<li className={previousClasses}>
		  <a onClick={(val) => this.onPageChange( this.props.currentPage - 1 )}
			 className="prevPage"
			 tabIndex="0"
			 onKeyPress={this.handlePreviousPage}>
			 <i className="fa fa-caret-left" aria-hidden="true"></i>
		  </a>
		</li>

		<li className={currentPage}>
			{currentPage}
		</li>

		<li className={nextClasses}>
		  <a onClick={(val) => this.onPageChange( this.props.currentPage + 1 )}
			 className="nextPage"
			 tabIndex="0"
			 onKeyPress={this.handleNextPage}>
			<i className="fa fa-caret-right" aria-hidden="true"></i>
		  </a>
		</li>

		<li className={nextClasses}>
		  <a onClick={(val) => this.onPageChange( this.props.pageCount )}
			 className="lastPage"
			 tabIndex="0"
			 onKeyPress={this.handleNextPage}>
			<i className="fa fa-step-forward" aria-hidden="true"></i>
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