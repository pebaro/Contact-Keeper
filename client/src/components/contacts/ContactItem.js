import React from 'react'

const ContactItem = ({ contact }) => {
	const { id, name, email, dob, type } = contact
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
				<button className="btn btn-dark btn-sm">Edit</button>
				<button className="btn btn-danger btn-sm">Delete</button>
			</div>
		</div>
	)
}

export default ContactItem
