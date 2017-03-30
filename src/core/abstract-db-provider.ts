import { Config } from '../config/config';
import * as Knex from "knex";

export class AbstractDbProvider {
    

    private _db:Knex;

    private _tableName: string;

    constructor(tableName: string) {     

        this._tableName = tableName;
           
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


    getTable () : Knex.QueryBuilder { 
        return this._db.table( this._tableName);    
    }

}
