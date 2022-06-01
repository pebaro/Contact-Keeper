import {
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT,
	CLEAR_ERRORS
} from '../types'

export default (state, action) => {
	switch (action.type) {
		case REGISTER_SUCCESS:
			localStorage.setItem('token', action.payload.token)

			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				loading: false
			}
		case REGISTER_FAILURE:
			localStorage.removeItem('token')

			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
				error: action.payload
			}
		default:
			return state
	}
}