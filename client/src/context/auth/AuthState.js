import React, { useReducer } from 'react'
import axios from 'axios'
import AuthContext from './authContext'
import authReducer from './authReducer'
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

const AuthState = props => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		loading: true,
		user: null,
		error: null
	}

	const [state, dispatch] = useReducer(authReducer, initialState)

	// ACTIONS:
	// Load User
	const loadUser = () => console.log('load user')

	// Register User -- it's working with MongoDB!!!!!
	const register = async formData => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}

		try {
			const res = await axios.post('/api/users', formData, config)

			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data
			})

		} catch (err) {
			dispatch({
				type: REGISTER_FAILURE,
				payload: err.response.data.msg
			})
		}
	}

	// Login User
	const login = () => console.log('login user')

	// Logout
	const logout = () => console.log('logout user')

	// Clear Errors
	const clearErrors = () => console.log('clear errors')

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,
				register,
				loadUser,
				login,
				logout,
				clearErrors
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthState
