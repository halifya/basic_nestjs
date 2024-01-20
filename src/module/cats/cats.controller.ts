import { Controller, Get, Post, Body, Param, Delete, HttpCode, Put, UsePipes } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatResInterface } from './interface/createCat.interface';
import { StandardRespInterface } from '../../interface/helper.interface';
import { ValidationPipe } from '../../validation/validation.pipe';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async create(@Body() createCatDto: CreateCatDto) {
    const createCat = await this.catsService.create(createCatDto)
    const result : CatResInterface = {
      success: true,
      message: "create success",
      data: createCat,
    }
    return result
  }

  @Get()
  async findAll() {
    const cats = await this.catsService.findAll();
    const result : StandardRespInterface = {
      success: true,
      message: "find success",
      data: cats,
    }
    return result
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const cat = await this.catsService.findOne(+id);
    const result : CatResInterface = {
      success: true,
      message: "find success",
      data: cat,
    }
    return result
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  async update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    const updateCat = await this.catsService.update(+id, updateCatDto);
    const result : CatResInterface = {
      success: true,
      message: "update success",
      data: updateCat,
    }
    return result
  }

  

  @Delete(':id')
  remove(@Param('id') id: string) {
    const removeCat = this.catsService.remove(+id);
    const result : CatResInterface = {
      success: true,
      message: "delete success",
      data: removeCat,
    }
    return result
  }
}
