import {EntityRepository, Repository, Like} from 'typeorm';
import {ComplementaryUser} from '../entities/pg/complementaryUSer';

@EntityRepository(ComplementaryUser)
export class UserComplementaryRepository extends Repository<ComplementaryUser> {
  findByEmail(email: string) {
    return this.findOne({where: {email: Like(`%${email}%`)}});
  }

  findByUser(user: string) {
    return this.findOne({where: {user_id: user}});
  }
}
