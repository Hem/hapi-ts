import { AbstractDbProvider } from '../../core/abstract-db-provider';
import { User } from '../models/models';
import * as Promise from "bluebird";
import { IRepository } from "../../core/irepository";

export interface IUserRepository extends IRepository<User> {

}


export class UserRepository extends AbstractDbProvider implements IUserRepository {
    


    constructor() {
        super();
    }

    getById(id: any): Promise<User> {
    
        return this.db.table("users")
                    .where({id: id})
                    .first();
                    
    }

    find(filter: any): Promise<User[]> {

        return this.db.table("users")
                        .where('name', 'like', `%${filter}%`);

    }

    create(dto: User): Promise<User> {
        throw new Error('Method not implemented.');
    }

    update(dto: User): Promise<User> {
        throw new Error('Method not implemented.');
    }


}
