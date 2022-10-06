import { Controller, Get } from '@nestjs/common';
import { Model } from './model';

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

}
