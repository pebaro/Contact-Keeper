import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/alertContext'
import ContactContext from '../../context/contact/contactContext'

const ContactForm = () => {
	const alertContext = useContext(AlertContext)
	const contactContext = useContext(ContactContext)

	const { setAlert } = alertContext
	const { addContact, updateContact, current, clearCurrent } = contactContext

	useEffect(() => {
		if (current !== null) {
			setContact(current)
		} else {
			setContact({
				name: '',
				email: '',
				dob: '',
				type: 'personal'
			})
		}
	}, [contactContext, current])
	
	const [contact, setContact] = useState({
		name: '',
		email: '',
		dob: '',
		type: 'personal'
	})

	const { name, email, dob, type } = contact

	const onChange = e => setContact({
		...contact,
		[e.target.name]: e.target.value
	})

	const onSubmit = e => {
		e.preventDefault()

		if (current === null) {
			if (name === '' || email === '') {
				setAlert('please include both a name and an email address', 'danger')
			} else {
				addContact(contact)
			}
		} else {
			updateContact(contact)
		}
		clearAll()
	}

	const clearAll = () => {
		clearCurrent()
	}

	return (
		<form onSubmit={onSubmit}>
			<h2 className="text-primary">
				{current ? 'Edit Contact' : 'Add Contact'}
			</h2>
			<input
				type="text"
				placeholder="Name"
				name="name"
				value={name}
				onChange={onChange}
			/>
			<input
				type="email"
				placeholder="Email"
				name="email"
				value={email}
				onChange={onChange}
			/>
			<input
				type="date"
				placeholder="Date of Birth"
				name="dob"
				value={dob}
				onChange={onChange}
			/>
			<h4>Contact Type</h4>
			<label className="radio-label"><input
				type="radio"
				name="type"
				value="personal"
				checked={
					type === 'personal'
				}
				onChange={onChange}
			/> &nbsp;Personal </label>
			<label className="radio-label"><input
				type="radio"
				name="type"
				value="professional"
				checked={
					type === 'professional'
				}
				onChange={onChange}
			/> &nbsp;Professional </label>
			<div>
				<input
					type="submit"
					value={current ? 'Update Contact' : 'Add Contact'}
					className="btn btn-primary btn-block"
				/>
			</div>
			{
				current && <div>
					<button
						className="btn btn-light btn-block"
						onClick={clearAll}
					>Clear</button>
				</div>
			}
		</form>
	)
}

export default ContactForm
