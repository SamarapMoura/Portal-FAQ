import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from './interface/question.interface';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Controller('questions')
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
  async UpdateQuestions(@Param('id', ParseIntPipe) id: number, @Body() updateQuestionDto: UpdateQuestionDto): Promise<Question>{
    return await this.questionsService.UpdateQuestions(id, updateQuestionDto)
  };

  @Delete('delete-question/:id')
  async DeleteQuestions(@Param('id', ParseIntPipe) id: number){
    return await this.questionsService.DeleteQuestions(id)
  };
}
