import { IsBoolean, IsNotEmpty, IsString, Length, IsNumber } from "class-validator";

export class CreateQuestionDto{
    @IsBoolean()
    urgence: boolean;

    @IsString()
    @IsNotEmpty()
    @Length(15, 120)
    @IsNotEmpty()
    title: string;

    @IsString()
    @Length(25, 255)
    @IsNotEmpty()
    content: string;

    @IsNumber()
    @IsNotEmpty()
    id_category: number;

    @IsNumber()
    @IsNotEmpty()
    id_user: number;
}
