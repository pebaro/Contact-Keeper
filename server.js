const express = require('express')

const app = express()

app.get('/', (req, res) => res.json({
	msg: 'Welcome to the Contact Keeper Tech Test API for Dotcrafted'
}))

const PORT = process.env.PORT || 5001

app.listen(PORT, () => console.log(`server started on port ${PORT}`))

