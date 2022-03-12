import {
  Entity,
  Column,
  PrimaryColumn,
  BeforeInsert,
  BeforeUpdate,
  BaseEntity,
} from 'typeorm';
import {validateOrReject, IsString, IsDate} from 'class-validator';

@Entity()
export class OrderHeader extends BaseEntity {
  @PrimaryColumn() id: number;

  @Column()
  @IsDate()
  date: Date;

  @Column()
  @IsString()
  name_client: string;

  @Column()
  @IsString()
  id_client: string;

  @Column()
  @IsString()
  address: string;

  @Column()
  @IsString()
  state: string;

  @Column()
  cash_on_delivery: string;

  @Column()
  shipping_cost: number;

  @Column()
  cost_only_purchase: number;

  @Column()
  selling_cost: number;

  @Column()
  tracing: boolean;

  @Column()
  delivery_day: string;

  @Column()
  delivery_time: string;

  @BeforeInsert()
  @BeforeUpdate()
  async validater() {
    await validateOrReject(this);
  }
}
