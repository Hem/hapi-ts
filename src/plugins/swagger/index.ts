import * as Hapi from "hapi";
import { IPlugin, IPluginInfo, PluginInfo } from "../../core/plugin-interfaces";
import { IApplicationConfiguration } from "../../core/application-interfaces";


class SwaggerPlugin implements IPlugin {

    register(server: Hapi.Server, appConfig: IApplicationConfiguration) {

        server.register([
            require('inert'),
            require('vision'),
            {
                register: require('hapi-swagger'),
                options: {
                    info: {
                        title: 'Task Api',
                        description: 'Task Api Documentation',
                        version: '1.0'
                    },
                    tags: [
                        {
                            'name': 'tasks',
                            'description': 'Api tasks interface.'
                        }
                    ],
                    documentationPage: true,
                    documentationPath: '/'
                }
            }
        ],

            (error) => {
                if (error) {
                    console.log('error', error);
                }
            });

    }

    // info!
    info(): IPluginInfo {
        return new PluginInfo("Swagger Plugin Wrapper", "1.0");
    }


}


export default (): IPlugin => {
    return new SwaggerPlugin();
} 