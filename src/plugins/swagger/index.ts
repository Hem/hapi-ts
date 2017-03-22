import { IPlugin, IPluginInfo, PluginInfo } from "../../core/plugin-interfaces";
import * as Hapi from "hapi";
import { IApplicationConfiguration } from "../../core/config-interfaces";


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
                            },
                            {
                                'name': 'users',
                                'description': 'Api users interface.'
                            }
                        ],
                        documentationPage: true,
                        documentationPath: '/docs'
                    }
                }
            ]
                , (error) => {
                    if (error) {
                        console.log('error', error);
                    }
                });

    }

    info(): IPluginInfo {
        return new PluginInfo( "SwaggerPlugin", "1.0" );
    }


}


export default (): IPlugin => {
    return new SwaggerPlugin();
} 