import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService){}
    
    async GetUsers(): Promise<User[]>{
        return await this.prisma.users.findMany();
    };

    async CreateUsers(createUserDto: CreateUserDto):Promise<User>{
        return await this.prisma.users.create({
            data: {
                username: createUserDto.username,
                login: createUserDto.login,
                password: createUserDto.password,
            },
        });
    };

    async UpdateUsers(id: number, updateUserDto: UpdateUserDto):Promise<User>{
        return await this.prisma.users.update({
            where: { id },
            data: {
                username: updateUserDto.username,
                login: updateUserDto.login,
                password: updateUserDto.password,
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
