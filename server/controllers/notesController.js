// const models = require('../models/notesModels');
const { Notes } = require('../models/notesModels');

const notesController = {};

notesController.addNote = (req, res, next) => {
  Notes.create(req.body)
    .then(() => next())
    .catch((err) => next(err));
};
