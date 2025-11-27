import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class BooksInputDto {
  @ApiProperty({ example: 'The Great Gatsby' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ example: 'F. Scott Fitzgerald' })
  @IsNotEmpty()
  @IsString()
  author: string;

  @ApiProperty({ example: 1925 })
  @IsNotEmpty()
  @IsInt()
  publishedYear: number;
}
