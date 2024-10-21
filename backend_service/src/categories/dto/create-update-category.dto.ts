import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUpdateCategoryDto { 
    @IsString()
    @IsNotEmpty()
    @Length(3, 45)
    name: string

}