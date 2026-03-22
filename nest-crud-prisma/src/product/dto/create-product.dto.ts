import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, Min, IsPositive } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Laptop', description: 'Product name' })
  @IsString()
  name!: string;

  @ApiProperty({ example: 'High-performance laptop', description: 'Product description', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 999.99, description: 'Product price' })
  @IsNumber()
  @IsPositive()
  price!: number;

  @ApiProperty({ example: 'Electronics', description: 'Product category' })
  @IsString()
  category!: string;
}