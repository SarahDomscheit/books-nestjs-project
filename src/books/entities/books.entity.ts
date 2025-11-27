import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Books {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'The unique identifier of the book',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'The Great Gatsby',
    description: 'The title of the book',
  })
  @Column({ nullable: false })
  title: string;

  @ApiProperty({
    example: 'F. Scott Fitzgerald',
    description: 'The author of the book',
  })
  @Column({ nullable: false })
  author: string;

  @ApiProperty({
    example: 1925,
    description: 'The year the book was published',
  })
  @Column({ nullable: false })
  publishedYear: number;
}
