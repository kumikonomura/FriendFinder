// Setting up the server
const express = require('express')
const app = express
const { join } = require('path')
// Declaring the middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const routes = require('./routes')
routes(app)

app.listen(process.env.PORT || 3000)
