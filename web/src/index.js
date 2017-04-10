import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './scenes/navigation/components/Header/reducer';

import App from './containers/App';

//import store from './store';
import Root from './router'; 

const store = createStore(
	reducers,
	window.devToolsExtension && window.devToolsExtension()
)

render(
  <Root store={store} />,
 	document.getElementById('app')
)




//https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1