import { IsBoolean, IsNotEmpty, IsString, Length, IsNumber, IsOptional } from "class-validator";

export class UpdateQuestionDto{
    @IsBoolean()
    @IsOptional()
    urgence: boolean;

    @IsString()
    @IsNotEmpty()
    @Length(15, 120)
    @IsOptional()
    title: string;

    @IsString()
    @Length(25, 255)
    @IsNotEmpty()
    @IsOptional()
    content: string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    id_category: number;
}
