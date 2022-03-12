import {
  Entity,
  Column,
  PrimaryColumn,
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import {
  IsNotEmpty,
  IsDate,
  MinLength,
  MaxLength,
  validateOrReject,
  Min,
  Max,
  IsBoolean,
} from 'class-validator';

@Entity()
export class Bonus extends BaseEntity {
  @PrimaryColumn() id: number;

  @Column()
  @IsNotEmpty()
  description: string;

  @Column()
  @IsNotEmpty()
  @IsBoolean()
  state: boolean;

  @Column()
  @IsNotEmpty()
  @Min(1)
  @Max(30)
  value: number;

  @Column()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(10)
  code: string;

  @Column()
  @IsDate()
  expired_at: Date;

  @Column()
  quantity: number;

  @BeforeInsert()
  @BeforeUpdate()
  async validater() {
    await validateOrReject(this);
  }
}
