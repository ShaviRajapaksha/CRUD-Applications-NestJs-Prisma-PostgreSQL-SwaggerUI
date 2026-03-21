import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
    constructor(private prisma: PrismaService) {}

    create(data: CreateBookDto) {
        return this.prisma.book.create({
            data,
        });
    }

    findAll() {
        return this.prisma.book.findMany({
            include: {author: true},
        })
    }

    findOne(id: number) {
        return this.prisma.book.findUnique({
            where: { id },
            include: {author: true},
        });
    }

    remove(id: number) {
        return this.prisma.book.delete({
            where: {id},
        });
    }
}
