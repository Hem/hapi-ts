import { DbType } from './application-interfaces';
import { DbConfiguration } from './application-params';
import * as Knex from "knex";

export class AbstractDbProvider {
    
    private _dbCofig:DbConfiguration;

    public db:Knex;


    constructor() {     
           
        this._dbCofig = new DbConfiguration();
        this._dbCofig.dbType = DbType.sqlite3;
        this._dbCofig.dbName = "hapi.sqlite";


         this.db = Knex({ 
                            client: "sqlite3",
                            connection: {
                                filename: this._dbCofig.dbName
                            }, 
                            pool: {
                                min: 0, 
                                max: this._dbCofig.maxConnection || 10
                            },
                            useNullAsDefault: true
                        });
            
        

    }
    

}
