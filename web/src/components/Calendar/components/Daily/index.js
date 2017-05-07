import PropTypes from 'prop-types';
import React from 'react';
import dates from 'components/Calendar/utils/dates';
import TimeGrid from 'components/Calendar/components/Time/TimeGrid';
import { navigate } from 'components/Calendar/utils/constants';

class Day extends React.Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
  };

  render() {
    let { date, ...props } = this.props;
    let { start, end } = Day.range(date)

    return (
      <TimeGrid {...props} start={start} end={end} eventOffset={10} />
    );
  }
}

Day.navigate = (date, action)=>{
  switch (action){
    case navigate.PREVIOUS:
      return dates.add(date, -1, 'day');

    case navigate.NEXT:
      return dates.add(date, 1, 'day')

    default:
      return date;
  }
}


Day.range = (date)=> {
  date = dates.startOf(date, 'day')
  return { start: date, end: date }
}


export default Day
