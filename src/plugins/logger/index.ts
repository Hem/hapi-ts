import { IPlugin, IPluginInfo, PluginInfo } from "../../core/plugin-interfaces";
import * as Hapi from "hapi";
import { IApplicationConfiguration } from "../../core/application-interfaces";


class LoggerPlugin implements IPlugin {

    register(server: Hapi.Server, appConfig: IApplicationConfiguration) {
        
        const options = {
                            ops: {
                                interval: 5000
                            },
                            reporters: {
                                myConsoleReporter: [{
                                //     module: 'good-squeeze',
                                //     name: 'Squeeze',
                                //     args: [{ log: '*', response: '*' }]
                                // }, {
                                     module: 'good-console'
                                 }, 'stdout']

                                // , myFileReporter: [{
                                //     module: 'good-squeeze',
                                //     name: 'Squeeze',
                                //     args: [{ ops: '*' }]
                                // }, {
                                //     module: 'good-squeeze',
                                //     name: 'SafeJson'
                                // }, {
                                //     module: 'good-file',
                                //     args: ['./test/fixtures/awesome_log']
                                // }],
                                // myHTTPReporter: [{
                                //     module: 'good-squeeze',
                                //     name: 'Squeeze',
                                //     args: [{ error: '*' }]
                                // }, {
                                //     module: 'good-http',
                                //     args: ['http://prod.logs:3000', {
                                //         wreck: {
                                //             headers: { 'x-api-key': 12345 }
                                //         }
                                //     }]
                                // }]
                            }
                        };

        server.register({
                register: require('good'),
                options: options
            }, (error) => {
                if (error) {
                    console.log('error', error);
                }
            });

    }

    info(): IPluginInfo {
        return new PluginInfo( "Logger Plugin", "1.0" );
    }


}


export default (): IPlugin => {
    return new LoggerPlugin();
} 