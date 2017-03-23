export interface IApplicationConfiguration {
    
    serverConfiguration : IServerConfiguration;

    dbConfiguration : IDbConfiguration;  
}


export interface IServerConfiguration {
    
    /**
     * Host name
     */
    host: string;


    /**
     * Port number for the API
     */
    port: number;

    /**
     * List of plugines to load found under the plugins directory in src
     */
    pluginsToLoad: Array<String>;

    /**
     * List of modules to load
     */
    modulesToLoad: Array<String>;
}


export interface IDbConfiguration {
    
    dbHostname: string;
    dbPortNumber: number;
    
    dbUsername: string;
    dbPassword: string;

    // default database to connect too
    dbName: string;
}


