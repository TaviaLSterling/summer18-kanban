let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Comment'

let schema = new Schema({
 
  description: { type: String, required: true },
  authorId: { type: ObjectId, ref: 'User', required: true },
  boardId: { type: ObjectId, ref: 'Board', required: true },
  listId: { type: ObjectId, ref: 'List', required: true },
  taskId: { type: ObjectId, ref: 'Task', required: true},
  created: { type: Number, required: true, default: Date.now() }
})

module.exports = mongoose.model(schemaName, schema)
