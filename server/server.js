const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;

// const notesController = require('./controllers/notesController')

// parse urlencoded content 
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// app.get('/api', (req, res) => {
//   res.send('This is my new message')
// })

// app.post('/note', 
//   notesController.addNote,
//   (req, res) => res.status(200).json({})
// )
// catch all route handler
// app.use((req, res) => res.sendStatus(404));

app.listen(PORT,() => console.log(`Listening on port ${PORT}...`));

