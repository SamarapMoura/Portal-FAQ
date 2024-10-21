import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, Request } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from './interface/question.interface';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('questions')
@UseGuards(AuthGuard('jwt'))
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  async GetQuestions(): Promise<Question[]> {
    return await this.questionsService.GetQuestions();
  };

  @Post('create-question')
  async CreateQuestions(@Body() createQuestionsDto: CreateQuestionDto): Promise<Question> {
    return await this.questionsService.CreateQuestions(createQuestionsDto);
  };

  @Patch('update-question/:id')
  async UpdateQuestions(@Param('id', ParseIntPipe) id: number, @Body() updateQuestionDto: UpdateQuestionDto, @Request() req,): Promise<Question>{
    return await this.questionsService.UpdateQuestions(id, updateQuestionDto, req.user.id)
  };

  @Delete('delete-question/:id')
  async DeleteQuestions(@Param('id', ParseIntPipe) id: number, @Request() req){
    return await this.questionsService.DeleteQuestions(id, req.user.id)
  };
}
