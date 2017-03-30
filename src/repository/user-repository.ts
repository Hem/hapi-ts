import { AbstractDbProvider } from '../core/abstract-db-provider';
import { User } from './models';
import { IRepository } from './irepository';
import * as Promise from "bluebird";

export interface IUserRepository extends IRepository<User> {

}


export class UserRepository extends AbstractDbProvider implements IUserRepository {

    constructor() {
        super();
    }
    
    first(id:number) : Promise<User> {

            return this.db.table("users")
                    .where({id: id})
                    .first('id', 'name');

    }

    getById(id: any): Promise<User> {
    
        return this.db.table("users")
                    .where({id: id})
                    .first();

        
    }
    find(filter: any): Promise<User[]> {
        throw new Error('Method not implemented.');
    }


}
