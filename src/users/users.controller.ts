import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInputDto } from './dto/user.input.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Users } from './entities/user.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import { Public } from 'src/public/decorators/public.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @ApiResponse({ status: 201, type: Users })
  @ApiOperation({ summary: 'Create a new user' })
  @Post()
  createUser(@Body() dto: UserInputDto) {
    return this.usersService.createUser(dto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200, description: 'List all users', type: [Users] })
  @ApiOperation({ summary: 'List all users' })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200, type: Users })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiOperation({ summary: 'Get a user by ID' })
  @Get(':id')
  findUserByID(@Param('id') id: string) {
    return this.usersService.findUserByID(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200, type: Users })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiOperation({ summary: 'Update a user by ID' })
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() dto: UserInputDto) {
    return this.usersService.updateUser(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 204, description: 'User deleted successfully' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiOperation({ summary: 'Delete a user by ID' })
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
