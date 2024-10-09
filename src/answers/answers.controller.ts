import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { Response } from './interface/response.interface';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';
import { AnswersService } from './answers.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('answers')
@UseGuards(AuthGuard('jwt'))
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @Get()
  async GetAnswers(): Promise<Response[]> {
    return await this.answersService.GetAnswers();
  };

  @Post('create-response')
  async CreateResponse(@Body() createResponseDto: CreateResponseDto): Promise<Response> {
    return await this.answersService.CreateResponse(createResponseDto);
  };
  
  @Patch('update-response/:id')
  async UpdateResponse(@Param('id', ParseIntPipe) id: number, @Body() updateResponseDto: UpdateResponseDto): Promise<Response>{
    return await this.answersService.UpdateResponse(id, updateResponseDto)
  };
  
  @Delete('delete-response/:id')
  async DeleteResponse(@Param('id', ParseIntPipe) id: number){
    return await this.answersService.DeleteResponse(id)
  };
}
