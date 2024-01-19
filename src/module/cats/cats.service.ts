import { Injectable, HttpException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,
  ) { }

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    try {
      const cat = this.catRepository.create(createCatDto);
      return await this.catRepository.save(cat);
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async findAll() {
    try {
      return await this.catRepository.find({
      });
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async findOne(id: number) {
    try {
      return await this.catRepository.findOneBy({
        id: id
      });
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    try {
      return this.catRepository.save({
        id: id,
        ...updateCatDto
      });
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async remove(id: number) {
    try {
      return this.catRepository.delete({
        id: id,
      });;
    } catch (error) {
      throw new HttpException(error, 500); 
    }
  }
}
