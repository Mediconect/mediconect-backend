import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  async GetUsers(@Res() res) {
    try {
      const users = await fetch('https://jsonplaceholder.typicode.com/users');
      const response = await users.json();
      res.status(HttpStatus.OK).json({
        response: response,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
