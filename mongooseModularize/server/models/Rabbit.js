// require mongoose
var mongoose = require('mongoose');
// create the schema
var RabbitSchema = new mongoose.Schema({
  name: String,
  age: Number
})
// register the schema as a model
var Rabbit = mongoose.model('Rabbit', RabbitSchema);