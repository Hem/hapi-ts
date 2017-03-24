import { IAppModule, IModuleInfo } from '../../core/application-interfaces';
import * as Hapi from 'hapi';
import Routes from "./routes";
import { ApplicationStartupParams, ModuleInfo } from '../../core/application-params';



export class AppModule implements IAppModule {
        
    init(server: Hapi.Server, params: ApplicationStartupParams) {
        Routes(server, params);
    }


    public info(): IModuleInfo {
        return new ModuleInfo("User's Module", "1.0.0");
    }

}




export default():IAppModule => {
    return new AppModule();
};


