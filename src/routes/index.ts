import { Request, Response } from "express";

import CreateDirectory from '../database/directory/createDirectory';
import ListDirectories from '../database/directory/listDirectory';
import DeleteDirectory from '../database/directory/deleteDirectory';
import CreateTodo from '../database/todo/createTodo';
import ListTodos from '../database/todo/listTodo';
import MoveTodoToDirectory from '../database/todo/moveToDirectory';
import MarkTodoAsDone from '../database/todo/markTodoAsDone';
import MarkTodoAsNotDone from '../database/todo/markTodoAsNotDone';


export default class TodoController {
    async createDirectory(req: Request, res: Response) {
        const { name, userId } = req.body;
        const directory = await CreateDirectory({ name, userId });
        res.json(directory);
    }

    async listDirectories(req: Request, res: Response) {
        const { userId } = req.body;
        const directories = await ListDirectories({ userId });
        res.json(directories);
    }

    async deleteDirectory(req: Request, res: Response) {
        const { id } = req.body;
        const directory = await DeleteDirectory({ id });
        res.json(directory);
    }

    async createTodo(req: Request, res: Response) {
        const { title, userId, directoryId } = req.body;
        const todo = await CreateTodo({ title, userId, directoryId });
        res.json(todo);

    }

    async listTodos(req: Request, res: Response) {
        const { userId, directoryId, status } = req.body;
        const todos = await ListTodos({ userId, directoryId, status });
        res.json(todos);
    }

    // async deleteTodo(req: Request, res: Response) {
    //     const { id } = req.body;
    //     const todo = await DeleteTodo({ id });
    //     res.json(todo);
    // }

    async moveTodoToDirectory(req: Request, res: Response) {
        const { id, directoryId } = req.body;
        const todo = await MoveTodoToDirectory({ id, directoryId });
        res.json(todo);
    }

    async markTodoAsDone(req: Request, res: Response) {
        const { id } = req.body;
        const todo = await MarkTodoAsDone({ id });
        res.json(todo);
    }

    async markTodoAsNotDone(req: Request, res: Response) {
        const { id } = req.body;
        const todo = await MarkTodoAsNotDone({ id });
        res.json(todo);
    }

}
