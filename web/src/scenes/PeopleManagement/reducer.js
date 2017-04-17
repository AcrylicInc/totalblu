import * as Actions from './actionTypes';

const initialState = {
	users: [
		{
			"name" : "Ryan Thorp",
			"jobTitle" : "Front-end Developer",
			"Department" : "IT",
			"Office" : "Bedford",
		},
		{
			"name" : "Ryan Thorp",
			"jobTitle" : "Front-end Developer",
			"Department" : "IT",
			"Office" : "Bedford",
		},
		{
			"name" : "Ryan Thorp",
			"jobTitle" : "Front-end Developer",
			"Department" : "IT",
			"Office" : "Bedford",
		},
		{
			"name" : "Ryan Thorp",
			"jobTitle" : "Front-end Developer",
			"Department" : "IT",
			"Office" : "Bedford",
		},
		{
			"name" : "Ryan Thorp",
			"jobTitle" : "Front-end Developer",
			"Department" : "IT",
			"Office" : "Bedford",
		}
	]
};

export default function PeopleManagementReducers(state=initialState, action) {
	switch ( action.type ){
		case Actions.GET_USERS:
			return [
				...state
			] ;
		break;
		default:
			return state;
	}
}