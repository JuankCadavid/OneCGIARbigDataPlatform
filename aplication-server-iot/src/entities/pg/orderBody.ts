import {
  Entity,
  Column,
  PrimaryColumn,
  BeforeInsert,
  BeforeUpdate,
  BaseEntity,
} from 'typeorm';
import {validateOrReject, IsInt, IsString} from 'class-validator';

@Entity()
export class OrderBody extends BaseEntity {
  @PrimaryColumn() id: number;

  @Column()
  @IsInt()
  id_order: number;

  @Column()
  @IsString()
  descripcion: string;

  @Column()
  @IsInt()
  precio: number;

  @Column()
  @IsInt()
  cantidad: number;

  @Column()
  @IsString()
  units: string;

  @Column()
  @IsString()
  reference: string;

  @Column()
  imagen: string;

  @Column()
  maduracion: string;

  @Column()
  nivelMaduracion: string;

  @Column()
  @IsString()
  comentarios: string;

  @BeforeInsert()
  @BeforeUpdate()
  async validater() {
    await validateOrReject(this);
  }
}
