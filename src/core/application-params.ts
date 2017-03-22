/**
 * Params needed to start up and register the application.
 * 
 */
import { IApplicationConfiguration, IServerConfiguration, IDbConfiguration } from "./config-interfaces";


export class ApplicationStartupParams implements IApplicationConfiguration {
    
    serverConfiguration: IServerConfiguration;

    dbConfiguration: IDbConfiguration;
}

export class ServerConfiguration implements IServerConfiguration {
    port: number;
    pluginsToLoad: String[];
    modulesToLoad: String[];
}

export class DbConfiguration implements IDbConfiguration {
    dbHostname: string;
    dbPortNumber: number;
    dbUsername: string;
    dbPassword: string;
    dbName: string;
}

/**
 * Parameters passed on Plugin Registration
 */
export class PluginRegistrationParams {

}

