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
export class Farmer extends BaseEntity {
  @PrimaryColumn() id: number;

  @Column()
  @Length(0, 500)
  @IsNotEmpty()
  firstname: string;

  @Column()
  @Length(0, 500)
  lastname: string;

  @Column()
  @Length(0, 100)
  document: string;

  @Column()
  @Length(0, 50)
  phone_number: string;

  @BeforeInsert()
  @BeforeUpdate()
  async validater() {
    await validateOrReject(this);
  }
}
