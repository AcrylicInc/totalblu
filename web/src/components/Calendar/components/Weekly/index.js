import PropTypes from 'prop-types';
import React from 'react';
import dates from 'components/Calendar/utils/dates';
import localizer from 'components/Calendar/localizer';
import { navigate } from 'components/Calendar/utils/constants';

import TimeGrid from 'components/Calendar/components/Time/TimeGrid';

class Week extends React.Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
  };

  static defaultProps = TimeGrid.defaultProps;

  render() {
    let { date, ...props } = this.props
    let { start, end } = Week.range(date, this.props)

    return (
      <TimeGrid {...props} start={start} end={end} eventOffset={15} />
    );
  }
}

Week.navigate = (date, action) => {
  switch (action){
    case navigate.PREVIOUS:
      return dates.add(date, -1, 'week');

    case navigate.NEXT:
      return dates.add(date, 1, 'week')

    default:
      return date;
  }
}

Week.range = (date, { culture }) => {
  let firstOfWeek = localizer.startOfWeek(culture)
  let start = dates.startOf(date, 'week', firstOfWeek)
  let end = dates.endOf(date, 'week', firstOfWeek)

  return { start, end }
}


export default Week