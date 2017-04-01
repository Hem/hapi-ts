import { IAppModule } from './core/application-interfaces';

import { ApplicationStartupParams } from "./core/application-params";
import * as Hapi from 'hapi';

import * as Users from './modules/users';
import * as Groups from './modules/groups';
import { IPlugin } from "./core/plugin-interfaces";

/**
 * 
 * @param params Call 
 */
export function init(params: ApplicationStartupParams): Hapi.Server {

    const server = new Hapi.Server();

    const plugins = params.serverConfiguration.pluginsToLoad;

    const modules = params.serverConfiguration.modulesToLoad;


    server.connection({
        host: params.serverConfiguration.host,
        port: process.env.port || params.serverConfiguration.port,
        routes: {
            cors: true
        }
    });


    // load plugins....
    plugins.forEach((pluginName: string) => {
        var plugin: IPlugin = (require("./plugins/" + pluginName)).default();
        console.log(`Register Plugin ${plugin.info().name} v${plugin.info().version}`);
        plugin.register(server, params);
    });


    // load modules
    modules.forEach((moduleName: string) => {
        var module: IAppModule = (require("./modules/" + moduleName)).default();

        console.log(`Register module ${module.info().name} v${module.info().version}`);

        module.init(server, params);
    });


    return server;
}