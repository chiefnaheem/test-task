import express from 'express';
const router = express.Router();

import TodoController from '../controller/appController';

const todoController = new TodoController();

router.post('/directory/create', todoController.createDirectory);
router.post('/directory/list', todoController.listDirectories);
router.post('/directory/remove', todoController.deleteDirectory);
router.post('/todo-item/create', todoController.createTodo);
router.post('/todo-item/list', todoController.listTodos);
// router.post('/deleteTodo', todoController.deleteTodo);
router.post('/todo-item/move-to-directory', todoController.moveTodoToDirectory);
router.post('/todo-item/mark-as-done', todoController.markTodoAsDone);
router.post('/todo-item/mark-as-not-done', todoController.markTodoAsNotDone);

export default router;