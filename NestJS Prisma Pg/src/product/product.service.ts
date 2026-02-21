import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) {}

    async create(CreateProductDto: CreateProductDto) {
        return this.prisma.product.create({
            data: CreateProductDto,
        });
    }

    async findAll() {
        return this.prisma.product.findMany({
            orderBy: {createdAt: 'desc'},
        })
    }

    async findOne(id: string) {
        const product = await this.prisma.product.findUnique({
            where: {id},
        });
        if(!product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }

    async update(id: string, UpdateProductDto: UpdateProductDto) {
        await this.prisma.product.update({
            where: {id},
            data: UpdateProductDto,
        });
    }

    async remove(id: string) {
        await this.prisma.product.delete({
            where: {id},
        });
    }

    async findByCategory(category: string) {
        return this.prisma.product.findMany({
            where: {category},
        })
    }
}