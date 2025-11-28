import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthRequestDto } from './dto/auth.request.dto';
import { AuthResponseDto } from './dto/auth.response.dto';
import { Public } from 'src/public/decorators/public.decorator';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(AuthGuard('local'))
  @ApiResponse({
    status: 200,
    description: 'User logged in successfully',
    type: AuthResponseDto,
  })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  @ApiOperation({ summary: 'User login' })
  @Post('')
  async login(@Request() req, @Body() authRequestDto: AuthRequestDto) {
    return this.authService.login(req.user);
  }
}
