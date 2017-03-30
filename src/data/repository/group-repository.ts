import { Group } from '../models/models';
import { IRepository } from "../../core/irepository";
import { AbstractDbProvider } from "../../core/abstract-db-provider";
import * as Promise from "bluebird";

export interface IGroupRepository extends IRepository<Group> {

}

export class GroupRepository extends AbstractDbProvider implements IGroupRepository {
    constructor() {
        super('groups');
    }
    
    getById(id: any): Promise<Group> {
        
        return this.getTable()
                    .where({id: id})
                    .first();
    }
    
    find(filter: any): Promise<Group[]> {
        
        const table = this.getTable();

        if ( filter ) {
            return table.where('name', 'like', `%${filter}%`);
        } else {
            return table;
        }

    }

    create(dto: Group): Promise<Group> {
        throw new Error('Method not implemented.');
    }
    update(dto: Group): Promise<Group> {
        throw new Error('Method not implemented.');
    }


}