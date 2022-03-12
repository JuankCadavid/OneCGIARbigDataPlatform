import {Entity, Column, PrimaryColumn, BaseEntity} from 'typeorm';
import {IsNotEmpty} from 'class-validator';

@Entity()
export class Recipe extends BaseEntity {
  @PrimaryColumn() id: number;

  @Column()
  @IsNotEmpty()
  description: string;

  @Column()
  @IsNotEmpty()
  ingredients: string;

  @Column()
  @IsNotEmpty()
  preparation: string;

  @Column()
  preparation_time: string;

  @Column()
  image_url: string;

  @Column()
  video_url: string;

  @Column()
  portions: string;

  @Column()
  difficulty: string;
}
