import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './interface/category.interface';
import { CreateUpdateCategoryDto } from './dto/create-update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async GetCategories(): Promise<Category[]> {
    return await this.categoriesService.GetCategories();
  };

  @Post('create-category')
  async CreateCategory(@Body() createCategoryDto: CreateUpdateCategoryDto): Promise<Category> {
    return await this.categoriesService.CreateCategory(createCategoryDto);
  };

  @Patch('update-category/:id')
  async UpdateCategory(@Param('id', ParseIntPipe) id: number, @Body() updateCategoryDto: CreateUpdateCategoryDto): Promise<Category>{
    return await this.categoriesService.UpdateCategory(id, updateCategoryDto)
  };

  @Delete('delete-category/:id')
  async DeleteCategories(@Param('id', ParseIntPipe) id: number){
    return await this.categoriesService.DeleteCategory(id)
  };
}
