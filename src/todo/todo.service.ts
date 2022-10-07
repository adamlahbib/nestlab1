import { Injectable } from '@nestjs/common';
import { Model } from './model';
import { Status } from './status.enum';
import { TodoAddDTO } from './todoadd.dto';
import { TodoUpdateDTO } from './todoupdate.dto';
import { GenerateIDService } from 'src/common/common.service';

@Injectable()
export class TodoService {    
    constructor(private generateIDService: GenerateIDService){}
    
    todoList: Model[]=[];

    create(todo: TodoAddDTO){
        const _:Model={
            id: this.generateIDService.generate(),
            name: todo.title,
            description: todo.description,
            createdAt: new Date(),
            status: Status.active
        }
        this.todoList.push(_);
        return todo;
    }

    fetch(){
        return this.todoList;
    }

    get(id: string){
        return this.todoList.find((todo) => todo.id === id);
    }

    update(id: string, todo: TodoUpdateDTO){
        const i=this.todoList.findIndex((todo) => todo.id === id);
        this.todoList[i].name=todo.title;
        this.todoList[i].description=todo.description;
        return this.todoList[i];
    }

    delete(id: string){
        const i=this.todoList.findIndex((todo) => todo.id === id);
        const deleted=this.todoList[i];
        this.todoList.splice(i, 1);
        return deleted;
    }
}
