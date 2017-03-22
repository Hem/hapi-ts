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
        serverConfig.port = 3500;
        serverConfig.pluginsToLoad = ['swagger'];

const appConfig = new ApplicationStartupParams();
    appConfig.dbConfiguration = dbConfig;
    appConfig.serverConfiguration = serverConfig;

const hapiServer = Server.init(appConfig);



hapiServer.start( () => {
    console.log('Server running at:', hapiServer.info.uri);
});