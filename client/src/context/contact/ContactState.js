import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from '../types'

const ContactState = props => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'Ted Bundy',
				email: 'scumbag@serialkillers.com',
				dob: '24/11/1946',
				type: 'unwanted'
			},
			{
				id: 2,
				name: 'Adolph Hitler',
				email: 'genocidal@maniac.com',
				dob: '20/04/1889',
				type: 'hated'
			},
			{
				id: 3,
				name: 'Borris Johnson',
				email: 'national@embarrasment.com',
				dob: '19/06/1964',
				type: 'shameful'
			},
			{
				id: 4,
				name: 'John Doe',
				email: 'dead@man.com',
				dob: '01/01/1999',
				type: 'personal'
			},
			{
				id: 5,
				name: 'Jane Doe',
				email: 'dead@woman.com',
				dob: '01/01/1999',
				type: 'professional'
			}
		],
		current: null
	}

	const [state, dispatch] = useReducer(contactReducer, initialState)

	// ACTIONS:
	// Add Contact
	const addContact = contact => {
		contact.id = uuidv4()
		dispatch({ type: ADD_CONTACT, payload: contact })
	}

	// Delete Contact
	const deleteContact = id => {
		dispatch({ type: DELETE_CONTACT, payload: id })
	}
	
	// Set Current Contact
	const setCurrent = contact => {
		dispatch({ type: SET_CURRENT, payload: contact })
	}
	
	// Clear Current Contact
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT })
	}
	
	// Update Contact
	
	// Filter Contacts
	
	// Clear Filter

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent
			}}
		>
			{props.children}
		</ContactContext.Provider>
	)
}

export default ContactState
