import {EntityRepository, Repository, Like} from 'typeorm';
import {Products} from '../entities/pg/Products';

@EntityRepository(Products)
export class ProductsRepository extends Repository<Products> {
  findByName(description: string) {
    return this.find({where: {description: Like(`%${description}%`)}});
  }

  findByReference(reference: string) {
    return this.findOne({where: {reference: reference}});
  }

  findByCategory(idCategory: string) {
    return this.find({
      where: {idcategory: idCategory},
      order: {description: 'ASC'},
    });
  }
}
