let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Task'

let schema = new Schema({
  title: { type: String, required: true },  ///works w/o title and description required but no title or description
  description: { type: String, required: true },
  authorId: { type: ObjectId, ref: 'User', required: true },
  boardId: { type: ObjectId, ref: 'Board', required: true },
  listId: { type: ObjectId, ref: 'List', required: true },
  created: { type: Number, required: true, default: Date.now() }
})

module.exports = mongoose.model(schemaName, schema)
