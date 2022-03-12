import {EntityRepository, Repository} from 'typeorm';
import {Recipe} from '../entities/pg/Recipe';

@EntityRepository(Recipe)
export class recipeRepository extends Repository<Recipe> {
  findByUser(recipeId: string) {
    return this.findOne({where: {id: recipeId}});
  }
}
