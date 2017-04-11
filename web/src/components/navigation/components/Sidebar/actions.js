import * as ActionsTypes from './actionTypes';

export const openModal = (active) => {
	return { 
		type: ActionsTypes.OPEN_MODAL,
		active
	}
}