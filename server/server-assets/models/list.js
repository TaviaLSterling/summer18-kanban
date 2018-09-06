let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'List'


let schema = new Schema({
  title: { type: String, required: true },
 
  created: { type: Number, default: Date.now() },
  authorId: { type: ObjectId, ref: 'User' },
  boardId: { type: ObjectId, ref: 'Board' }
})


module.exports = mongoose.model(schemaName, schema)