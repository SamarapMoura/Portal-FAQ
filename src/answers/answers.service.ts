import { Injectable } from '@nestjs/common';
import { Response } from './interface/response.interface';
import { PrismaService } from 'src/database/prisma.service';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';

@Injectable()
export class AnswersService {
    constructor(private prisma: PrismaService){}
    
    async GetAnswers(): Promise<Response[]>{
        return await this.prisma.answers.findMany();
    };

    async CreateResponse(createResponseDto: CreateResponseDto):Promise<Response>{
        return await this.prisma.answers.create({
            data: {
                response: createResponseDto.response,
                id_question: createResponseDto.id_question,
                id_user: createResponseDto.id_user
            },
        });
    };

    async UpdateResponse(id: number, updateResponseDto: UpdateResponseDto):Promise<Response>{
        return await this.prisma.answers.update({
            where: { id },
            data: {
                response: updateResponseDto.response,
                id_question: updateResponseDto.id_question,
            },
        });
    };

    async DeleteResponse(id: number):Promise<{ message: string }>{
        await this.prisma.answers.delete({
            where: { id }
        });
        return{ message: "Resposta deletada" }
    };
}
