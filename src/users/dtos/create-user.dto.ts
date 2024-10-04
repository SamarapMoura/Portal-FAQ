import { IsString, Length, IsNotEmpty, IsEmail } from 'class-validator'
export class CreateUserDto{
    @IsString()
    @Length(5, 45)
    @IsNotEmpty()
    username: string;

    @IsString()
    @Length(10, 100)
    @IsNotEmpty()
    @IsEmail()
    login: string;

    @IsString()
    @Length(8, 20)
    @IsNotEmpty()
    password: string;

}
