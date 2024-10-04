import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class CreateResponseDto{

    @IsString()
    @IsNotEmpty()
    @Length(25,255)
    response: string;

    @IsNumber()
    @IsNotEmpty()
    id_user: number;

    @IsNumber()
    @IsNotEmpty()
    id_question: number;


}