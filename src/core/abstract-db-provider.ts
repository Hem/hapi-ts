import { Config } from '../config/config';
import * as Knex from "knex";

export class AbstractDbProvider {
    

    public db:Knex;


    constructor() {     
           
               this.db = Knex({ 
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
    

}
