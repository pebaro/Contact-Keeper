import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext'

const ContactItem = ({ contact }) => {

	const contactContext = useContext(ContactContext)
	const { deleteContact, setCurrent, clearCurrent } = contactContext

	const { _id, name, email, dob, type } = contact

	const onDelete = () => {
		deleteContact(_id)
		clearCurrent()
	}

	return (
		<div className="contact card bg-light">
			<h3 className="contact__heading text-primary">
				<span className="contact__name">
					{name}
				</span>
				{' '}
				<span className={
					'contact__type badge ' + (
						type === 'professional'
							? 'badge-success' : 'badge-primary'
					)
				}>{
					type.charAt(0).toUpperCase() + type.slice(1)
				}</span>
			</h3>
			<ul className="contact__details list">
				{email && (<li>
					<i className="fas fa-envelope-open"></i> {email}
				</li>)}
				{dob && (<li>
					<i className="fas fa-calendar-day"></i> {dob}
				</li>)}
			</ul>
			<div className="contact__buttons">
				<button
					className="btn btn-dark btn-sm"
					onClick={() => setCurrent(contact)}
				>Edit</button>
				<button
					className="btn btn-danger btn-sm"
					onClick={onDelete}
				>Delete</button>
			</div>
		</div>
	)
}

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired
}

export default ContactItem
