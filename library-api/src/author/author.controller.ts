import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';

@ApiTags('author')
@Controller('author')
export class AuthorController {
    constructor(readonly service: AuthorService) {}

    @Post()
    Create(@Body() dto: CreateAuthorDto) {
        return this.service.create(dto);
    }

    @Get() 
    findAll() {
        return this.service.findsAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.service.findOne(Number(id));
    }

    @Delete(':id') 
    remove(@Param('id') id: string) {
        return this.service.remove(Number(id));
    }
}
