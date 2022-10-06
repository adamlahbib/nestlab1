import { IsNotEmpty, IsString } from 'class-validator';
import { Status } from './status.enum';

export class TodoAddDTO{
    @IsString()
    @IsNotEmpty()
    title: string;
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    id:string;
    createdAt: Date;
    status: Status;
}