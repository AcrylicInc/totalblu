import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import routes from './router'; 

import PlayerReducer from './scenes/navigation/components/Header/reducer';

console.log(PlayerReducer);

const store = createStore(
  PlayerReducer,
  window.devToolsExtension && window.devToolsExtension()
);

const Root = ({ store }) => (
  <Provider store={store}>
      routes
  </Provider>
);

render(
  <Root store={store} />,
  document.getElementById('app')
)



// render(
//   routes,
//   document.getElementById('app')
// )