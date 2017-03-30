import * as Promise from "bluebird";

export interface IRepository<T> {
    
    getById(id) : Promise<T>;
    
    find(filter) : Promise<T[]>;


}