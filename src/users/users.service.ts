import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { hash } from 'bcrypt'; 

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService){}
    
    async GetUsers(): Promise<User[]>{
        return await this.prisma.users.findMany();
    };

    async CreateUsers(createUserDto: CreateUserDto):Promise<User>{
        const saltRounds = 10;
        const hashedPassword = await hash(createUserDto.password, saltRounds);

        return await this.prisma.users.create({
            data: {
                username: createUserDto.username,
                login: createUserDto.login,
                password: hashedPassword,
            },
        });
    };

    async UpdateUsers(id: number, updateUserDto: UpdateUserDto):Promise<User>{

        let password = updateUserDto.password

        if(password){
            const saltRounds = 10;
            password = await hash(updateUserDto.password, saltRounds);
        }

    

        return await this.prisma.users.update({
            where: { id },
            data: {
                username: updateUserDto.username,
                login: updateUserDto.login,
                password: password || updateUserDto.password
            },
        });
    };

    async DeleteUsers(id: number):Promise<{ message: string }>{
        await this.prisma.users.delete({
            where: { id }
        });
        return{ message: "User deletado" }
    };
}
