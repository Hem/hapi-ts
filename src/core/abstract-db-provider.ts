import { Config } from '../config/config';
import * as Knex from "knex";

export class AbstractDbProvider {
    

    private _db:Knex;

    private _tableName: string;

    constructor(tableName: string) {     
        this._tableName = tableName;
    }


    getDb() : Knex {
        
        if (!this._db) {
                this._db = Knex({ 
                    client: "sqlite3",
                    connection: {
                        filename: Config.database.dbName
                    }, 
                    pool: {
                        min: 0, 
                        max: Config.database.maxConnection || 10
                    },
                    useNullAsDefault: true
                });
        }

        return this._db;
    }


    getTable () : Knex.QueryBuilder { 

        return this.getDb().table( this._tableName);    
    }

}
