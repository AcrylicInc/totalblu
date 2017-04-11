import * as Actions from './actionTypes';

const initialState = {
	meta: [
		{
			title: 'Dashboard',
		}
	],
	navigation: [
		{
		name: 'Jim Hoskins',
		  score: 31,
			created: '11/8/2016',
			updated: '11/9/2016'
		},
		{
			name: 'Andrew Chalkley',
			score: 20,
			created: '11/9/2016',
			updated: '11/10/2016'
		},
		{
			name: 'Alena Holligan',
			score: 50,
			created: '11/11/2016',
			updated: '11/12/2016'
		}
	],
};

export default function Navigation(state=initialState, action) {
	switch ( action.type ){
		case Actions.OPEN_MODAL:
			return [
				...state
			] ;
		break;
		default:
			return state;
	}
}