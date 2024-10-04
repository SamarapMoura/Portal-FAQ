import { Injectable } from '@nestjs/common';
import { Category } from './interface/category.interface';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUpdateCategoryDto } from './dto/create-update-category.dto';

@Injectable()
export class CategoriesService {
    constructor(private prisma: PrismaService){}
    async GetCategories(): Promise<Category[]>{
        return await this.prisma.category.findMany();
    };

    async CreateCategory(createCategoryDto: CreateUpdateCategoryDto):Promise<Category>{
        return await this.prisma.category.create({
            data: {
                name: createCategoryDto.name,
            },
        });
    };

    async UpdateCategory(id: number, updateCategoryDto: CreateUpdateCategoryDto):Promise<Category>{
        return await this.prisma.category.update({
            where: { id },
            data: {
                name: updateCategoryDto.name,
            },
        });
    };

    async DeleteCategory(id: number):Promise<{ message: string }>{
        await this.prisma.category.delete({
            where: { id }
        });
        return{ message: "Categoria deletada" }
    };
}
