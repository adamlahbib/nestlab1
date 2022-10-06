import { IsNotEmpty, IsString } from 'class-validator';

export class TodoDTO{
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}