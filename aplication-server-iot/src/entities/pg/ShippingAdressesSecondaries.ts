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
export class customerAddress extends BaseEntity {
  @PrimaryColumn() id: number;

  @Column()
  @Length(0, 300)
  @IsNotEmpty()
  name: string;

  @Column()
  @Length(0, 300)
  @IsNotEmpty()
  street_type: string;

  @Column()
  @Length(0, 300)
  @IsNotEmpty()
  address: string;

  @Column()
  @Length(0, 100)
  @IsNotEmpty()
  neighborhood: string;

  @Column()
  @IsNotEmpty()
  city: number;

  @Column()
  @Length(0, 1000)
  comment: string;

  @Column()
  @IsNotEmpty()
  state: boolean;

  @Column()
  @Length(1, 100)
  @IsNotEmpty()
  user_id: string;

  @Column()
  complementary_user_id: number;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @BeforeInsert()
  @BeforeUpdate()
  async validater() {
    await validateOrReject(this);
  }
}
