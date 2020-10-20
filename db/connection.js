require('dotenv').config()
const mongoose = require('mongoose')
const mongoURI = process.env.mongoURI

// mongoose.connect('mongodb://localhost/cookbooks', { useUnifiedTopology: true, useNewUrlParser: true })

// Create Connection URI
// const mongoURI = 'mongodb://localhost/cookbooks_db'

// CONFIG PARAMS
const config = {
    useUnifiedTopology: true,
    useNewUrlParser: true 
}

//CONNECT TO THE DATABASE
mongoose.connect(mongoURI, config)

mongoose.Promise = Promise

const db = mongoose.connection 


// ADDITIONAL MESSAGE CONNECTIONS. EVENT LISTENER 
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));


module.exports = mongoose
