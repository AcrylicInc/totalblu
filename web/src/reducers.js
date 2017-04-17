import React from 'react';
import { combineReducers } from 'redux'

import NavigationReducers from './components/navigation/components/Navigation/reducer';
import PeopleManagementReducers from './scenes/PeopleManagement/reducer';

export default combineReducers({
  NavigationReducers,
  PeopleManagementReducers
})