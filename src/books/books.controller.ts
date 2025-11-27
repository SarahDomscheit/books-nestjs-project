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
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @ApiResponse({ status: 200, description: 'List all books', type: [Books] })
  @ApiOperation({ summary: 'List all books' })
  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @ApiResponse({ status: 200, type: Books })
  @ApiResponse({ status: 404, description: 'Book not found' })
  @ApiOperation({ summary: 'Get a book by ID' })
  @Get(':id')
  findBookbyID(@Param('id') id: string) {
    return this.booksService.findBookbyID(id);
  }

  @ApiResponse({ status: 201, type: Books })
  @ApiOperation({ summary: 'Add a new book' })
  @Post()
  createBook(@Body() dto: BooksInputDto) {
    return this.booksService.createBook(dto);
  }

  @ApiOperation({ summary: 'Update a book by ID' })
  @ApiResponse({ status: 200, type: Books })
  @ApiResponse({ status: 404, description: 'Book not found' })
  @Put(':id')
  updateBook(@Param('id') id: string, @Body() dto: BooksInputDto) {
    return this.booksService.updateBook(id, dto);
  }

  @ApiOperation({ summary: 'Delete a book by ID' })
  @ApiResponse({ status: 204, description: 'Book deleted successfully' })
  @ApiResponse({ status: 404, description: 'Book not found' })
  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    return this.booksService.deleteBook(id);
  }
}
