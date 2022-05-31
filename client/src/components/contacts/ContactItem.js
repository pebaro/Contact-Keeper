import React from 'react'

const ContactItem = ({ contact }) => {
	const { id, name, email, dob, type } = contact
	return (
		<div className="card bg-light">
			<h3 className="text-primary text-left">
				{name} {' '} <span className={
					'badge ' + (
						type === 'professional'
							? 'badge-success' : 'badge-primary'
					)
				}>{
					type.charAt(0).toUpperCase() + type.slice(1)
				}</span>
			</h3>
			<ul className="list">
				{email && (<li>
					<i className="fas fa-envelope-open"></i> {email}
				</li>)}
				{dob && (<li>
					<i className="fas fa-calendar-day"></i> {dob}
				</li>)}
			</ul>
			<p>
				<button className="btn btn-dark btn-sm">Edit</button>
				<button className="btn btn-danger btn-sm">Delete</button>
			</p>
		</div>
	)
}

export default ContactItem
