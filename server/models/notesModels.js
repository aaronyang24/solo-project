const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://aaronyang24:codesmith@cluster0.xivrs.mongodb.net/notes?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'notes'
})
.then(()=>console.log('Connected to Mongo DB.'))
.catch(err=>console.log(err));

const Schema = mongoose.Schema;

const notesSchema = new Schema({
  text: String,
})

const Notes = mongoose.model('notes', notesSchema);

module.exports = {
  Notes,
}