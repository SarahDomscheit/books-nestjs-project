import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Books } from './entities/books.entity';
import { Repository } from 'typeorm';
import { BooksInputDto } from './dto/books.input.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Books) private booksRepository: Repository<Books>,
  ) {}

  findAll(): Promise<Books[]> {
    return this.booksRepository.find();
  }

  async findBookbyID(id: string): Promise<Books> {
    const book = await this.booksRepository.findOne({ where: { id } });
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }

  async createBook(dto: BooksInputDto): Promise<Books> {
    const newBook = this.booksRepository.create(dto);
    return await this.booksRepository.save(newBook);
  }

  async updateBook(id: string, dto: BooksInputDto): Promise<void> {
    await this.booksRepository.update(id, dto);
  }

  async deleteBook(id: string): Promise<void> {
    const bookToDelete = await this.booksRepository.delete(id);
    if (bookToDelete.affected === 0) {
      throw new NotFoundException(`Book with ID: ${id} not found.`);
    }
  }
}
