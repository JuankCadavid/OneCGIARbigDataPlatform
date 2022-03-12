import {EntityRepository, Repository} from 'typeorm';
import {OrderHeader} from '../entities/pg/OrderHeader';

@EntityRepository(OrderHeader)
export class OrderHeaderRepository extends Repository<OrderHeader> {
  findByClient(client: string) {
    return this.find({where: {id_client: client}});
  }
}
