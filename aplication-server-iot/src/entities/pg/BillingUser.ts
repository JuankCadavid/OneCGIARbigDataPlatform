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
export class BillingUser extends BaseEntity {
  @PrimaryColumn() id: number;

  @Column()
  @Length(0, 300)
  @IsNotEmpty()
  firstname: string;

  @Column()
  @Length(0, 300)
  firstname1: string;

  @Column()
  @Length(0, 300)
  @IsNotEmpty()
  lastname: string;

  @Column()
  @Length(0, 300)
  lastname1: string;

  @Column()
  @Length(0, 20)
  phone: string;

  @Column()
  @Length(0, 20)
  @IsNotEmpty()
  phone1: string;

  @Column()
  @IsNotEmpty()
  state: boolean;

  @Column()
  @Length(1, 100)
  @IsNotEmpty()
  user_id: string;

  @Column()
  @IsNotEmpty()
  complementary_user_id: number;

  @BeforeInsert()
  @BeforeUpdate()
  async validater() {
    await validateOrReject(this);
  }
}
