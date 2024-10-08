import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interface/user.interface';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { AuthGuard } from '@nestjs/passport';


@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async GetUsers(): Promise<User[]> {
    return await this.usersService.GetUsers();
  };

  @Post('create-user')
  async CreateUsers(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersService.CreateUsers(createUserDto);
  };

  @Patch('update-user/:id')
  async UpdateUsers(
  @Param('id', ParseIntPipe) id: number, 
  @Body() updateUserDto: UpdateUserDto,
  @Request() req,
): Promise<User>{
    return await this.usersService.UpdateUsers(id, updateUserDto, req.user.id)
  };

  @Delete('delete-user/:id')
  async DeleteUsers(@Param('id', ParseIntPipe) id: number, @Request() req){
    return await this.usersService.DeleteUsers(id, req.user.id)
  };
}
