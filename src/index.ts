import { DbType } from './core/application-interfaces';
/// <reference path="../typings/index.d.ts" />

"use strict";

import * as Hapi from "hapi";
import * as Server from "./server";
import { ApplicationStartupParams, ServerConfiguration } from "./core/application-params";

        
const serverConfig = new ServerConfiguration();
        serverConfig.host = "localhost";
        serverConfig.port = 3500;

        // list of plugins to load
        serverConfig.pluginsToLoad = ['swagger','logger'];

        // list of modules to load
        serverConfig.modulesToLoad = ['users', 'groups'];



const appConfig = new ApplicationStartupParams();
    appConfig.serverConfiguration = serverConfig;


const hapiServer = Server.init(appConfig);


if ( !module.parent ) {
    
    hapiServer.start( () => {
        console.log('Server running at:', hapiServer.info.uri);
    });
}