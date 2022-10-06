import { Body, Controller, Get, Post } from '@nestjs/common';
import { Model } from './model';
import { v4 as uuid} from 'uuid';

@Controller('todo')
export class TodoController {
    constructor(){
        this.todoList=[new Model('1','Learn Nest','Better learn Nest')];
    }

    todoList: Model[] = [];

    @Get()
    getTodoList(): Model[] {
        return this.todoList;
    }

    @Post()
    createTodo(@Body() body): Model {
        const todo=new Model(uuid(), body.title, body.description);
        this.todoList.push(todo);
        return todo;
    } 

}
