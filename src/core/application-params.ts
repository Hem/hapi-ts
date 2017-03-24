/**
 * Params needed to start up and register the application.
 * 
 */
import {
    IApplicationConfiguration,
    IDbConfiguration,
    IModuleInfo,
    IServerConfiguration
} from './application-interfaces';


export class ApplicationStartupParams implements IApplicationConfiguration {
    public serverConfiguration: IServerConfiguration;
    public dbConfiguration: IDbConfiguration;
}

export class ServerConfiguration implements IServerConfiguration {
    public host: string;
    public port: number;
    public pluginsToLoad: String[];
    public modulesToLoad: String[];
}

export class DbConfiguration implements IDbConfiguration {
    public dbHostname: string;
    public dbPortNumber: number;
    public dbUsername: string;
    public dbPassword: string;
    public dbName: string;
}




export class ModuleInfo implements IModuleInfo {

    constructor(public name:string, public version:string ) {}
    
}
