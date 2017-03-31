import { AbstractDbProvider } from '../../core/abstract-db-provider';
import { User } from '../models/models';
import * as Promise from "bluebird";
import { ILookupRepository, IRepository } from '../../core/irepository';

export interface IUserRepository extends IRepository<User> {

}


export class UserRepository extends AbstractDbProvider implements IUserRepository, ILookupRepository {
    
    constructor() {
        super('users');
    }

    getById(id: any): Promise<User> {
    
        return this.getTable()
                    .where({id: id})
                    .first();
                    
    }

    find (filter: any): Promise<User[]> {
        
        const table = this.getTable();

        if ( filter ) {
            return table.where('name', 'like', `%${filter}%`)
        } else {
            return table;
        }

    }

    create(dto: User): Promise<User> {
        throw new Error('Method not implemented.');
    }

    update(dto: User): Promise<User> {
        throw new Error('Method not implemented.');
    }


}
