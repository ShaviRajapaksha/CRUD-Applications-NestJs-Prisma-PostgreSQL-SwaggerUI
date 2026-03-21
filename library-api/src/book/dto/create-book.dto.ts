import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
    @ApiProperty()
    title!: string;
    
    @ApiProperty()
    authorId!: number;    
}

