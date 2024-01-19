import { IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateCatDto {
  @IsString()
  name: string

  @IsNumber()
  age: number

  @IsString()
  @IsOptional()
  gender: string
}
