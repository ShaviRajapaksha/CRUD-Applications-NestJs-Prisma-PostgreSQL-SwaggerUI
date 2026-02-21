import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString, MaxLength, Min } from "class-validator";

export class CreateProductDto {
    @ApiProperty( {description: 'Product name', example: 'Laptop'} )
    @IsString()
    @MaxLength(100)
    name: string;

    @ApiProperty( {description: 'Product description', required: false, example: 'High Performance laptop'} )
    @IsString()
    @IsOptional()
    @MaxLength(500)
    description: string;

    @ApiProperty( {description: 'Product price', example: 999.99} )
    @IsNumber()
    @Min(0)
    price: number;

    @ApiProperty( {description: 'Product category', example: 'Electronics'} )
    @IsString()
    category: string;

    @ApiProperty( {description: 'Stock quantity', example: 50} )
    @IsNumber()
    @Min(0)
    stock: number;
}