import { Group } from '../models';
import { IRepository } from "../../core/irepository";
import { AbstractDbProvider } from "../../core/abstract-db-provider";
import * as Promise from "bluebird";

export interface IGroupRepository extends IRepository<Group> {

}

export class GroupRepository extends AbstractDbProvider implements IGroupRepository {
    
    getById(id: any): Promise<Group> {
        return this.db.table('groups')
                    .where({id: id})
                    .first();
    }
    
    find(filter: any): Promise<Group[]> {
        return this.db.table('groups')
                .where('name', 'like', `%${filter}%`)
    }

    create(dto: Group): Promise<Group> {
        throw new Error('Method not implemented.');
    }
    update(dto: Group): Promise<Group> {
        throw new Error('Method not implemented.');
    }


}