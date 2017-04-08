import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import routes from './router'; 

import PlayerReducer from './scenes/navigation/components/Header/reducer';

import App from './containers/App';

const store = createStore(
  PlayerReducer,
  window.devToolsExtension && window.devToolsExtension()
);

const Root = ({ store }) => (
  <Provider store={store}>
      routes
  </Provider>
);

// render(
//   <Root store={store} />,
//   document.getElementById('app')
// )




render(
  routes,
  document.getElementById('app')
)



// render(
//   routes,
//   document.getElementById('app')
// )

//https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1