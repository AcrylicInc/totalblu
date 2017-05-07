import React, {Component} from 'react';
import { PropTypes } from 'react-prop-types';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

//import * as ActionCreators from './actions';

// require('./style.scss');



  class NewItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
		}
	}


	componentDidMount() {
	    document.title = "New Item";
	}
	render() {
		return (
      <div className='rbc-toolbar'>
        <div className="col-lg-9">
          <span className='rbc-toolbar-label'>
            New Item
          </span>
        </div>
        <div className="col-lg-3 end-md">
        </div>
      </div>
		);
	}
}

NewItem
export default NewItem;
