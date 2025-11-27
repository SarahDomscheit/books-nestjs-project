import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Books } from './entities/books.entity';
import { BooksInputDto } from './dto/books.input.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findBookbyID(@Param('id') id: string) {
    return this.booksService.findBookbyID(id);
  }

  @Post()
  createBook(@Body() dto: BooksInputDto) {
    return this.booksService.createBook(dto);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() dto: BooksInputDto) {
    return this.booksService.updateBook(id, dto);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    return this.booksService.deleteBook(id);
  }
}
