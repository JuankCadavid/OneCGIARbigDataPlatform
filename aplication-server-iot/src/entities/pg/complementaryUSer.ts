import {
  Entity,
  Column,
  PrimaryColumn,
  BeforeInsert,
  BeforeUpdate,
  BaseEntity,
} from 'typeorm';
import {validateOrReject, Length, IsNotEmpty} from 'class-validator';

@Entity()
export class ComplementaryUser extends BaseEntity {
  @PrimaryColumn() id: number;

  @Column()
  @Length(0, 2)
  @IsNotEmpty()
  document_type: string;

  @Column()
  @Length(5, 20)
  @IsNotEmpty()
  document: string;

  @Column()
  genre: string;

  @Column()
  autorization: string;

  @Column()
  @Length(1, 100)
  @IsNotEmpty()
  email: string;

  @Column()
  @Length(1, 100)
  @IsNotEmpty()
  user_id: string;

  @BeforeInsert()
  @BeforeUpdate()
  async validater() {
    await validateOrReject(this);
  }
}
