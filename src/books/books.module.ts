import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Books } from './entities/books.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Books])],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
