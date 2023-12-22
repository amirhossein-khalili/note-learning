const asyncHandler = require('express-async-handler');

const Todo = require('./todoModel');

const getAllTodos = asyncHandler(async (req, res, next) => {
  let { fields } = req.query;

  if (fields) {
    var fieldsList = fields
      .split(',')
      .map((field) => field.trim())
      .filter((item) => item);
  }
  delete req.query['fields'];

  const todos = await Todo.find(req.query)
    .select(fieldsList || [])
    .exec();

  res.status(200).json({
    status: 'success',
    results: todos.length,

    todos: todos.reverse(),
  });
});

const getTodo = asyncHandler(async (req, res, next) => {
  const todo = await Todo.findById(req.params.id).exec();

  if (!todo) {
    return next(new ApiError('There is no todo with that id', 404));
  }

  res.status(200).json({
    status: 'success',

    todo,
  });
});

const createTodo = asyncHandler(async (req, res, next) => {
  const newTodo = await Todo.create(req.body);

  res.status(201).json({
    status: 'success',

    todo: newTodo,
  });
});

const updateTodo = asyncHandler(async (req, res, next) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({
    status: 'success',

    updatedTodo,
  });
});

const deleteTodo = asyncHandler(async (req, res, next) => {
  await Todo.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
  });
});

module.exports = {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
