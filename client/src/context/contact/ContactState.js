import React, { useReducer } from 'react'
import uuid from 'uuid'
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
			}
		]
	}

	const [state, dispatch] = useReducer(contactReducer, initialState)

	// coming actions:
	// Add Contact
	// Delete Contact
	// Set Current Contact
	// Clear Current Contact
	// Update Contact
	// Filter Contacts
	// Clear Filter

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts
			}}
		>
			{props.children}
		</ContactContext.Provider>
	)
}

export default ContactState
