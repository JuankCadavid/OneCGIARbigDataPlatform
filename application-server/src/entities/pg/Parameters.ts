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
export class Parameters extends BaseEntity {
  @PrimaryColumn() id: number;

  @Column()
  @Length(0, 100)
  @IsNotEmpty()
  reference: string;

  @Column()
  @Length(0, 20)
  value: number;

  @BeforeInsert()
  @BeforeUpdate()
  async validater() {
    await validateOrReject(this);
  }
}
