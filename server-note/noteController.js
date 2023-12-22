const asyncHandler = require('express-async-handler');

const Note = require('./noteModel');

const getAllNotes = asyncHandler(async (req, res, next) => {
  let { fields } = req.query;

  if (fields) {
    var fieldsList = fields
      .split(',')
      .map((field) => field.trim())
      .filter((item) => item);
  }
  delete req.query['fields'];

  const notes = await Note.find(req.query)
    .select(fieldsList || [])
    .exec();

  res.status(200).json({
    status: 'success',
    results: notes.length,

    notes: notes.reverse(),
  });
});

const getNote = asyncHandler(async (req, res, next) => {
  const note = await Note.findById(req.params.id).exec();

  if (!note) {
    return next(new ApiError('There is no note with that id', 404));
  }

  res.status(200).json({
    status: 'success',

    note,
  });
});

const createNote = asyncHandler(async (req, res, next) => {
  const newNote = await Note.create(req.body);
  res.status(201).json({
    status: 'success',

    note: newNote,
  });
});

const updateNote = asyncHandler(async (req, res, next) => {
  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({
    status: 'success',

    updatedNote,
  });
});

const deleteNote = asyncHandler(async (req, res, next) => {
  await Note.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
  });
});

module.exports = {
  getAllNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};
