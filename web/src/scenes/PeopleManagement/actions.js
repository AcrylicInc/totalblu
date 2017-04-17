import * as ActionsTypes from './actionTypes';

export const getUsers = (active) => {
	return { 
		type: ActionsTypes.GET_USERS,
		active
	}
}