import thunkMiddleware from 'redux-thunk';
import rootReducer from 'reducers';
import persistState from 'redux-localstorage';

const persistedReducers = [
	'files',
	'currentFile',
	'preferences'
];

const createPersistentStore = compose(
	persistState(persistedReducers)
)(applyMiddleware(
	thunkMiddleware
)(createStore));

const store = createPersistentStore(
	rootReducer
);
// https://github.com/fatiherikli/fil/tree/master/app
export default store;