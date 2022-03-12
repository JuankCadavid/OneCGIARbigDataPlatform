import {EntityRepository, Repository} from 'typeorm';
import {customerAddress} from '../entities/pg/ShippingAdressesSecondaries';

@EntityRepository(customerAddress)
export class UserShippingAddressesRepository extends Repository<
  customerAddress
> {
  findByUser(user_id: string) {
    return this.find({where: {user_id: user_id}});
  }

  findByTypeAddress(user_id: string, name: string) {
    return this.findOne({user_id: user_id, name: name});
  }
}
