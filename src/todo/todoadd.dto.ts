import { IsNotEmpty, IsString } from 'class-validator';

export class TodoAddDTO{
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}