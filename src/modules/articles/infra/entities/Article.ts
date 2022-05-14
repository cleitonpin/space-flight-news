import { hash } from "bcrypt";
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";

interface LauncheEvent {
  id: string
  provider: string
}

@Entity('articles')
class Article {

  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column()
  featured: boolean;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column()
  imageUrl: string;

  @Column()
  newsSite: string;

  @Column()
  summary: string;

  @Column()
  publishedAt: Date;

  @Column('text', { array: true })
  launches: LauncheEvent[]

  @Column('text', { array: true })
  events: LauncheEvent[]
}

export { Article }