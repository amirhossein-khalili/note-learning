// noteRoutes.js

const express = require('express');
const noteController = require('./noteController');
const router = express.Router();
const newNoteSchema = require('./noteErrorHandler');
const validateRequest = require('./validateRequest');

router
  .route('/')
  .get(noteController.getAllNotes)
  .post(
    validateRequest(newNoteSchema), 
    noteController.createNote);

router
  .route('/:id')
  .get(noteController.getNote)
  .patch(validateRequest(newNoteSchema), noteController.updateNote)
  .delete(noteController.deleteNote);

module.exports = router;
