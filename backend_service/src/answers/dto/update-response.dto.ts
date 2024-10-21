import { IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator";

export class UpdateResponseDto{
    @IsString()
    @IsNotEmpty()
    @Length(25,255)
    @IsOptional()
    response: string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    id_question: number;
}