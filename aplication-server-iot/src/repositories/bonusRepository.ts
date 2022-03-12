import {EntityRepository, Repository} from 'typeorm';
import {Bonus} from '../entities/pg/Bonus';

@EntityRepository(Bonus)
export class bonusRepository extends Repository<Bonus> {
  finById(idBonus: number) {
    return this.findOne({where: {id: idBonus}});
  }

  findByCode(code: string) {
    return this.findOne({where: {code: code}});
  }
}
