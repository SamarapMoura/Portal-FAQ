import { Module } from '@nestjs/common';
import { AnswersController } from './answers.controller';
import { AnswersService } from './answers.service';
import { PrismaService } from 'src/database/prisma.service'

@Module({
  controllers: [AnswersController],
  providers: [AnswersService, PrismaService],
})
export class AnswersModule {}