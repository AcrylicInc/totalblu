import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import message from './utils/messages';
import { navigate } from './utils/constants';

class Toolbar extends React.Component {
  static propTypes = {
    view: PropTypes.string.isRequired,
    views: PropTypes.arrayOf(
      PropTypes.string,
    ).isRequired,
    label: PropTypes.node.isRequired,
    messages: PropTypes.object,
    onNavigate: PropTypes.func.isRequired,
    onViewChange: PropTypes.func.isRequired,
  }

  render() {
    let { messages, label } = this.props;

    messages = message(messages)

    return (
      <div className='rbc-toolbar'>
        <div className="col-lg-9">
          <span className='rbc-btn-group'>
            <a onClick={this.navigate.bind(null, navigate.PREVIOUS)} >
              <i className="fa fa-caret-left" aria-hidden="true"></i>
            </a>
            <a onClick={this.navigate.bind(null, navigate.TODAY)} >
              <i className="fa fa-dot-circle-o" aria-hidden="true"></i>
            </a>
            <a onClick={this.navigate.bind(null, navigate.NEXT)} >
              <i className="fa fa-caret-right" aria-hidden="true"></i>
            </a>
          </span>
          <span className='rbc-toolbar-label'>
            { label }
          </span>

          <ul className="calendar-filter">
            <li><i></i>Meeting</li>
            <li><i></i>Meeting</li>
            <li><i></i>Meeting</li>
            <li><i></i>Meeting</li>
            <li><i></i>Meeting</li>
          </ul>
        </div>
        <div className="col-lg-3 end-md">
          <a className="btn" href="">New item</a>
        </div>
      </div>
    );
  }

  navigate = (action) => {
    this.props.onNavigate(action)
  }

  view = (view) => {
    this.props.onViewChange(view)
  }

  viewNamesGroup(messages) {
    let viewNames = this.props.views
    const view = this.props.view

    if (viewNames.length > 1) {
      return (
        viewNames.map(name =>
          <button type='button' key={name}
            className={cn({'rbc-active': view === name})}
            onClick={this.view.bind(null, name)}
          >
            {messages[name]}
          </button>
        )
      )
    }
  }
}

export default Toolbar;
