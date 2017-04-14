import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers';

import App from './containers/App';

//import store from './store';
import Root from './router'; 

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__


const store = createStore(
	reducer,
	preloadedState,
	window.devToolsExtension && window.devToolsExtension()
)

store.subscribe( () => {
	console.log("storechange", store.getState());
});

render(
  <Root store={store} />,
 	document.getElementById('app')
)




//https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1