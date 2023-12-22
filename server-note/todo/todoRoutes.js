const express = require('express');
const todoController = require('./todoController');
const router = express.Router();
const validateRequest = require('../validateRequest');
const newTodoSchema = require('./todoErrorHandler');
router
  .route('/')
  .get(todoController.getAllTodos)
  .post(validateRequest(newTodoSchema), todoController.createTodo);

router
  .route('/:id')
  .get(todoController.getTodo)
  .patch(validateRequest(newTodoSchema), todoController.updateTodo)
  .delete(todoController.deleteTodo);

// router.route('/delete/:id').delete(todoController.hardDeleteTodo);

module.exports = router;
