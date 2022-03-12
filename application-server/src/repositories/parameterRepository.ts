import {EntityRepository, Repository} from 'typeorm';
import {Parameters} from '../entities/pg/Parameters';

@EntityRepository(Parameters)
export class ParameterRepository extends Repository<Parameters> {
  findByShipphing(doc: string) {
    return this.find({where: {reference: doc}});
  }
}
