import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCatDto extends PartialType(CreateCatDto) {
  @IsString()
  name: string

  @IsNumber()
  age: number

  @IsString()
  @IsOptional()
  gender: string
}
