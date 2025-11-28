import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @IsString()
  @ApiProperty()
  token: string;
}
