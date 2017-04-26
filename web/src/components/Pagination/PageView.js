import React, {Component} from 'react';
import { PropTypes } from 'react-prop-types';

class PageView extends Component {
  constructor(props) {
  super(props);

  this.state = {
    selected: 'test'
  };
  }
  render() {
    let linkClassName = this.props.pageLinkClassName;
    let cssClassName = this.props.pageClassName;

    if (this.props.selected) {
      if (typeof(cssClassName) !== 'undefined') {
        cssClassName = cssClassName + ' ' + this.props.activeClassName;
      } else {
        cssClassName = this.props.activeClassName;
      }
    }

    return (
        <li className={cssClassName}>
            <a onClick={(val) => this.props.onPageChange(this.props.page)}
               className={linkClassName}
               tabIndex="0"
               onKeyPress={(val) => this.props.onPageChange(this.props.page)}>
              {this.props.page}
            </a>
        </li>
    );
  }
};

PageView.propTypes = {
  onPageChange: React.PropTypes.func.isRequired,
}
export default PageView;