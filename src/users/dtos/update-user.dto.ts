import { IsString, Length, IsNotEmpty, IsEmail, IsOptional } from 'class-validator'
export class UpdateUserDto{
    @IsString()
    @Length(5, 45)
    @IsNotEmpty()
    @IsOptional()
    username: string;

    @IsString()
    @Length(10, 100)
    @IsNotEmpty()
    @IsEmail()
    @IsOptional()
    login: string;

    @IsString()
    @Length(8, 20)
    @IsNotEmpty()
    @IsOptional()
    password: string;

}