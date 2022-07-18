import { Body, Controller, Get, Post } from '@nestjs/common';
import { Token } from 'src/common/decorators/token.decorator';
import Response from 'src/common/response/response';
import { InfToken } from 'src/share/interfaces/InfToken';
import { TokenService } from 'src/token/token.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly tokenSerivce: TokenService,
  ) {}

  @Get('/test')
  test(): any {
    const token: string = this.tokenSerivce.makeAccessToken('youEunJae');

    return token;
  }

  @Get('testing')
  getToken(@Token() token: InfToken): any {
    console.log(token);
  }

  @Post('info')
  async getUserInfo(@Body() dto: CreateUserDto): Promise<string> {
    return this.userService.getUserInfo(dto);
  }

  @Post('infoFe')
  async getInfoFe(@Body() dto: CreateUserDto): Promise<Response> {
    await this.userService.getInfoFe(dto);

    return Response.success('회원가입 성공');
  }
}
