import { PartialType } from '@nestjs/mapped-types';
import { Status } from './status.enum';
import { TodoAddDTO } from './todoadd.dto';

export class TodoUpdateDTO extends PartialType(TodoAddDTO){
    status: Status;
}