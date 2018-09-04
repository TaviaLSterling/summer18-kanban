var mongoose = require('mongoose')
var connectionString = 'mongodb://user01:user01@ds018538.mlab.com:18538/kanban'
var connection = mongoose.connection


mongoose.connect(connectionString, { useMongoClient: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})