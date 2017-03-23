/// <reference path="../typings/index.d.ts" />

"use strict";

import * as Hapi from "hapi";
import * as Server from "./server";
import { DbConfiguration, ApplicationStartupParams, ServerConfiguration, PluginRegistrationParams } from "./core/application-params";


const dbConfig = new DbConfiguration();
        dbConfig.dbHostname = "localhost";
        dbConfig.dbName = "hapi-ts-test";
        dbConfig.dbUsername = "unknown";
        dbConfig.dbPassword = "tiger";
        
const serverConfig = new ServerConfiguration();
        serverConfig.host = "localhost";
        serverConfig.port = 3500;

        // list of plugins to load
        serverConfig.pluginsToLoad = ['swagger','logger'];

        // list of modules to load
        serverConfig.modulesToLoad = ['users', 'groups'];



const appConfig = new ApplicationStartupParams();
    appConfig.dbConfiguration = dbConfig;
    appConfig.serverConfiguration = serverConfig;

const hapiServer = Server.init(appConfig);


if ( !module.parent ) {
    
    hapiServer.start( () => {
        console.log('Server running at:', hapiServer.info.uri);
    });
}