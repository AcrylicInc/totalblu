import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import createFragment from 'react-addons-create-fragment';
import PageView from './PageView';
import BreakView from './BreakView';

class Pagination extends Component {
  constructor(props) {
	super(props);
	this.state = {
	  selected: 0
	};
  }
  onPageChange(val){
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

	} else {

	  let leftSide  = (this.props.pageRangeDisplayed / 2);
	  let rightSide = (this.props.pageRangeDisplayed - leftSide);

	  if (this.props.currentPage > this.props.pageCount - this.props.pageRangeDisplayed / 2) {
		rightSide = this.props.pageCount - this.props.currentPage;
		leftSide  = this.props.pageRangeDisplayed - rightSide;
	  }
	  else if (this.props.currentPage < this.props.pageRangeDisplayed / 2) {
		leftSide  = this.props.currentPage;
		rightSide = this.props.pageRangeDisplayed - leftSide;
	  }

	  let index;
	  let page;
	  let breakView;

	  for (index = 0; index < this.props.pageCount; index++) {

		page = index + 1;

		let pageView = (
		  <PageView
			onPageChange={(val) => this.onPageChange(val)}
			selected={this.props.currentPage === index}
			pageClassName={this.props.pageClassName}
			pageLinkClassName={this.props.pageLinkClassName}
			activeClassName={this.props.activeClassName}
			page={page} />
		);

		if (page <= this.props.marginPagesDisplayed) {
		  items['key' + index] = pageView;
		  continue;
		}

		if (page > this.props.pageCount - this.props.marginPagesDisplayed) {
		  items['key' + index] = pageView;
		  continue;
		}

		if ((index >= this.props.currentPage - leftSide) && (index <= this.props.currentPage + rightSide)) {
		  items['key' + index] = pageView;
		  continue;
		}

		let keys            = Object.keys(items);
		let breakLabelKey   = keys[keys.length - 1];
		let breakLabelValue = items[breakLabelKey];

		if (this.props.breakLabel && breakLabelValue !== breakView) {
		  breakView = (
			<BreakView
			  breakLabel={this.props.breakLabel}
			  breakClassName={this.props.breakClassName} />
		  );

		  items['key' + index] = breakView;
		}
	  }
	}

	return items;
  };

  render() {
	let disabled = this.props.disabledClassName;

	const previousClasses = classNames(this.props.previousClassName,
									   {[disabled]: this.props.currentPage === 0});

	const nextClasses = classNames(this.props.nextClassName,
								   {[disabled]: this.props.currentPage === this.props.pageCount - 1});

	return (
	  <ul className={this.props.containerClassName}>
		<li className={previousClasses}>
		  <a onClick={(val) => this.onPageChange( this.props.currentPage - 1 )}
			 className="prev"
			 tabIndex="0"
			 onKeyPress={this.handlePreviousPage}>
			{this.props.previousLabel}
		  </a>
		</li>

		{createFragment(this.pagination())}

		<li className={nextClasses}>
		  <a onClick={(val) => this.onPageChange( this.props.currentPage + 1 )}
			 className="next"
			 tabIndex="0"
			 onKeyPress={this.handleNextPage}>
			{this.props.nextLabel}
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