import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto.ts';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    create(createUserDto: CreateUserDto) {
        return this.prisma.user.create({
            data: {
                name: createUserDto.name,
                email: createUserDto.email,
            },
        })
    }

    findAll() {
        return this.prisma.user.findMany();
    }

    findOne(id: number) {
        return this.prisma.user.findUnique({
            where: {id},
        })
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.prisma.user.update({
            where: {id},
            data: {
                name: updateUserDto.name,
                email: updateUserDto.email,
            },
        })
    }

    remove(id: number) {
        return this.prisma.user.delete({
            where: {id},
        })
    }
}
