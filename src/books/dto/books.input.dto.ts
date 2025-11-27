import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class BooksInputDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsInt()
  publishedDate: number;
}
