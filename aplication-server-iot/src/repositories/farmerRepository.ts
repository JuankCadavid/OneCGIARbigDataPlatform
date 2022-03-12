import {EntityRepository, Repository} from 'typeorm';
import {Farmer} from '../entities/pg/Farmer';

@EntityRepository(Farmer)
export class FarmerRepository extends Repository<Farmer> {
  findByDocument(doc: string) {
    return this.find({where: {document: doc}});
  }
}
