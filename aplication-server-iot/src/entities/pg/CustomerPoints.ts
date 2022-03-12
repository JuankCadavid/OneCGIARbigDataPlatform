import {
  Entity,
  Column,
  PrimaryColumn,
  BeforeInsert,
  BeforeUpdate,
  BaseEntity,
} from 'typeorm';
import {validateOrReject, IsString} from 'class-validator';

@Entity()
export class CustomerPoints extends BaseEntity {
  @PrimaryColumn() id: number;

  @Column()
  @IsString()
  id_client: string;

  @Column() points: number;

  @BeforeInsert()
  @BeforeUpdate()
  async validater() {
    await validateOrReject(this);
  }
}
