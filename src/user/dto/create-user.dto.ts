import { IsEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsEmpty()
  name: string;

  @IsString()
  @IsEmpty()
  ps: string;
}
