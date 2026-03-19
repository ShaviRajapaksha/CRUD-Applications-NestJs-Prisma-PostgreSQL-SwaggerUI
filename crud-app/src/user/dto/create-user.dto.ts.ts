import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {

    @ApiProperty({ example: "John Doe", description: "The name of the user" })
    @IsString()
    name: string;

    @ApiProperty({ example: "john.doe@example.com", description: "The email of the user" })
    @IsEmail()
    email: string;

}