const express = require('express')
const connectDB = require('./config/db')

const app = express()

// connect the database
connectDB()

// init the Middleware
app.use(express.json({
	extended: false
}))

app.get('/', (req, res) => res.json({
	msg: 'Welcome to the Contact Keeper Tech Test API for Dotcrafted'
}))

// DEFINE ROUTES
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))
app.use('/api/users', require('./routes/users'))

const PORT = process.env.PORT || 5001

app.listen(PORT, () => console.log(`server started on port ${PORT}`))

