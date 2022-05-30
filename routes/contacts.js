const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

// bring in the schemas
const User = require('../models/User')
const Contact = require('../models/Contact')

// @route 		GET api/contacts
// @desc 		Get all users' contacts
// @access 		Private
router.get('/', auth, async (req, res) => {
	try {
		const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 })

		res.json(contacts)

	} catch (err) {
		console.error(err.message)
		res.status(500).send('server error')
	}
})

// @route 		POST api/contacts
// @desc 		Add new contact
// @access 		Private
router.post('/',
	[auth, [
		check('name', 'name is required').not().isEmpty()
	]],
	async (req, res) => {
		const errors = validationResult(req)
	
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}

		const { name, email, dob, type } = req.body
		
		try {
			const newContact = new Contact({
				name,
				email,
				dob,
				type,
				user: req.user.id
			})

			const contact = await newContact.save()

			res.json(contact)

		} catch (err) {
			console.error(err.message)
			res.status(500).send('server error')
		}
	}
)

// @route 		PUT api/contacts/:id
// @desc 		Update contact
// @access 		Private
router.put('/:id', (req, res) => {
	res.send('Update contact')
})

// @route 		DELETE api/contacts/:id
// @desc 		Delete contact
// @access 		Private
router.delete('/:id', (req, res) => {
	res.send('Delete contact')
})

module.exports = router
