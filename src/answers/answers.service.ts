import { Injectable, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
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

    async UpdateResponse(id: number, updateResponseDto: UpdateResponseDto,  user_id_request: number):Promise<Response>{
       
        if (id !== user_id_request){
            throw new HttpException(
                'Essa resposta não lhe pertence.',
                HttpStatus.UNAUTHORIZED,
            )
        }
        return await this.prisma.answers.update({
            where: { id },
            data: {
                response: updateResponseDto.response,
                id_question: updateResponseDto.id_question,
            },
        });
    };

    async DeleteResponse(id: number, user_id_request: number):Promise<{ message: string }>{

        if (id !== user_id_request){
            throw new HttpException(
                'Você não pode deletar esta resposta, ela não lhe pertence.',
                HttpStatus.UNAUTHORIZED,
            )
        }

        await this.prisma.answers.delete({
            where: { id }
        });
        return{ message: "Resposta deletada" }
    };
}
