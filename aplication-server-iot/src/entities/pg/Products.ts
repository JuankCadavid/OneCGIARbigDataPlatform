import {
  Entity,
  Column,
  PrimaryColumn,
  BeforeInsert,
  BeforeUpdate,
  BaseEntity,
} from 'typeorm';
import {
  validateOrReject,
  Length,
  Min,
  Max,
  IsInt,
  IsNotEmpty,
} from 'class-validator';

@Entity()
export class Products extends BaseEntity {
  @PrimaryColumn() id: number;

  @Column()
  @Length(5, 10)
  @IsNotEmpty()
  reference: string;

  @Column()
  @Length(0, 50)
  @IsNotEmpty()
  description: string;

  @Column()
  @Min(0)
  @Max(20)
  @IsNotEmpty()
  idcategory: number;

  @Column({nullable: true})
  @Min(1)
  @Max(100000)
  @IsNotEmpty()
  price: number;

  @Column({nullable: true})
  @IsInt()
  @Min(0)
  @Max(1000000)
  quantity: number;

  @Column()
  @Length(0, 30)
  barcode: string;

  @Column()
  @Length(0, 10)
  @IsNotEmpty()
  units: string;

  @Column()
  promo: string;

  @Column()
  state: string;

  @Column()
  cost: number;

  @Column()
  maturation: string;

  @Column()
  units_per_pound: string;

  @Column()
  tip: string;

  @Column()
  price_by_quantity: number;

  @Column()
  sub_category: string;

  @Column()
  sub_category_two: string;

  @Column()
  discount: string;

  @BeforeInsert()
  @BeforeUpdate()
  async validater() {
    await validateOrReject(this);
  }
}
