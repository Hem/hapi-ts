import * as Hapi from 'hapi';
import { IAppModule, IModuleInfo } from '../../core/application-interfaces';
import { ApplicationStartupParams, ModuleInfo } from '../../core/application-params';
import Routes from "./routes";


export class AppModule implements IAppModule {
        
    init(server: Hapi.Server, params: ApplicationStartupParams) {
        Routes(server, params);
    }


    public info(): IModuleInfo {
        return new ModuleInfo("Lookup Module", "1.0.0");
    }

}




export default():IAppModule => {
    return new AppModule();
};


