import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from 'src/database/prisma.service'
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, CategoriesModule, QuestionsModule, AnswersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}



