import * as Promise from "bluebird";



    export interface IEntity {
        id: number;
        name: string;
    }


    export interface IRepository<T> {

        getById(id: any): Promise<T>;

        find(filter: any): Promise<T[]>;

        create(dto: T): Promise<T>;

        update(dto: T): Promise<T>;
    }



    // LookupRepository search and select framework
    export interface ILookupRepository {

        getById(id: any): Promise<any>;

        find(filter: any): Promise<any[]>;

    }



    export interface ILookupRepositoryFactory {

        getRepository(type: string): ILookupRepository;

    }
