import React from 'react'

const About = () => {
	return (
		<div>
			<h1>About This Test for Dotcrafted</h1>
			<p className="my-1">
				This is a basic application for users to create, update, delete and display a list of their personal contacts.
			</p>
			<p className="my-1">
				Each user has their own user profile and login with unique contacts accessible only to them.
			</p>
			<p className="my-1">
				User accounts and contacts are stored in MongoDB and connected to this app using Express.
			</p>
			<p className="my-1">
				The front end has been built using React along with a bunch of supporting packages outlined in the package.json and README.md files.
			</p>
			<p className="my-1">
				To summarise, this is a full stack JavaScript application using most of the MERN stack.
			</p>
			<p className="bg-dark p">
				<strong>Version</strong> 1.0
			</p>
		</div>
	)
}

export default About
