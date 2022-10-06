import { Body, Param, Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { Model } from './model';
import { v4 as uuid} from 'uuid';
import { TodoAddDTO } from './todoadd.dto';
import { TodoUpdateDTO } from './todoupdate.dto';
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
    createTodo(@Body() body: TodoAddDTO): Model {
        const todo=new Model(uuid(), body.title, body.description);
        this.todoList.push(todo);
        return todo;
    } 

    @Get(':id')
    getTodo(@Param('id') id: string): Model{
        return this.todoList.find((todo) => todo.id === id);
    } 

    @Delete(':id')
    deleteTodo(@Param('id') id: string): Model{
        const i=this.todoList.findIndex((todo) => todo.id === id);
        const deleted=this.todoList[i];
        this.todoList.splice(i, 1);
        return deleted;
    }

    @Put(':id')
    updateTodo(@Param('id') id: string, @Body() body: TodoUpdateDTO): Model{
        const i=this.todoList.findIndex((todo) => todo.id === id);
        this.todoList[i].name=body.title?body.title:this.todoList[i].name;
        this.todoList[i].description=body.description?body.description:this.todoList[i].description;
        return this.todoList[i];
    }

}
