import { IsString, IsEmail, IsInt } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;
    
    @IsInt()
    age: string;
}
