import * as Hapi from 'hapi';


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

export enum DbType {
    sqlite3,
    mysql,
    mssql
}

export interface IDbConfiguration {
    dbType: string;

    dbHostname: string;
    dbPortNumber: number;
    
    dbUsername: string;
    dbPassword: string;

    // default database to connect too
    dbName: string;

    minConnection:number;
    maxConnection:number;
    acquireConnectionTimeout: number;
}


export interface IModuleInfo {
    name:string; 
    version:string;
}

export interface IAppModule {

    init(server: Hapi.Server, params: IApplicationConfiguration);

    info() : IModuleInfo;
}

