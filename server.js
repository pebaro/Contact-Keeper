const express = require('express')
const connectDB = require('./config/db')
const path = require('path')

const app = express()

// connect the database
connectDB()

// init the Middleware (instead of body parser)
app.use(express.json({
	extended: false
}))

// for testing
// app.get('/', (req, res) => { res.json({ msg: 'testing' }) })

// DEFINE ROUTES
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))
app.use('/api/users', require('./routes/users'))

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
	// set static folder
	app.use(express.static('client/build'))

	app.get(
		'*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	)
}

const PORT = process.env.PORT || 5001

app.listen(PORT, () => console.log(`server started on port ${PORT}`))

