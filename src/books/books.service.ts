import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Books } from './entities/books.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Books) private booksRepository: Repository<Books>,
  ) {}

  findAll(): Promise<Books[]> {
    return this.booksRepository.find();
  }
}
