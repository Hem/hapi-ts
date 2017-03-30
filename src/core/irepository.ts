import * as Promise from "bluebird";

export interface IRepository<T> {
    
    getById(id:any) : Promise<T>;
    
    find(filter:any) : Promise<T[]>;

    create(dto:T) : Promise<T>;

    update(dto:T) : Promise<T>;
}