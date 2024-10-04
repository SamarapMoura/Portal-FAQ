import { Injectable } from '@nestjs/common';
import { Question } from './interface/question.interface';
import { PrismaService } from 'src/database/prisma.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';


// urgence: boolean;
// title: string;
// content: string;
// id_category: number;
// id_user: number;

@Injectable()
export class QuestionsService {
    constructor(private prisma: PrismaService){}
    async GetQuestions(): Promise<Question[]>{
        return await this.prisma.questions.findMany();
    }
    
    async CreateQuestions(createQuestionDto: CreateQuestionDto):Promise<Question>{
        return await this.prisma.questions.create({
            data: {
                title: createQuestionDto.title,
                urgence: createQuestionDto.urgence,
                content: createQuestionDto.content,
                id_category: createQuestionDto.id_category,
                id_user: createQuestionDto.id_user
            },
        });
    };
    
    async UpdateQuestions(id: number, updateQuestionDto: UpdateQuestionDto):Promise<Question>{
        return await this.prisma.questions.update({
            where: { id },
            data: {
                title: updateQuestionDto.title,
                urgence: updateQuestionDto.urgence,
                content: updateQuestionDto.content,
                id_category: updateQuestionDto.id_category,
            },
        });
    };

    async DeleteQuestions(id: number):Promise<{ message: string }>{
        await this.prisma.questions.delete({
            where: { id }
        });
        return{ message: "Pergunta deletada" }
    };
}
