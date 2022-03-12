import {EntityRepository, Repository} from 'typeorm';
import {BillingUser} from '../entities/pg/BillingUser';

@EntityRepository(BillingUser)
export class UserBillingRepository extends Repository<BillingUser> {
  findByUser(user_idp: string) {
    return this.findOne({where: {user_id: user_idp}});
  }
}
