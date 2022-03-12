import {EntityRepository, Repository} from 'typeorm';
import {ShippingUser} from '../entities/pg/ShippingUser';

@EntityRepository(ShippingUser)
export class UserShippingRepository extends Repository<ShippingUser> {
  findByUser(user_id: string) {
    return this.findOne({where: {user_id: user_id}});
  }
}
