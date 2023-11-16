import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Hashtag } from './hashtag.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToMany(() => Hashtag, hashtag => hashtag.posts, {
    cascade: true,
  })
  @JoinTable()
  hashtags: Hashtag[];
}
