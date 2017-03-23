import { IAppModule, ModuleInfo } from '../../core/module-interface';
import * as Hapi from "hapi"
import Routes from "./routes";
import {  ApplicationStartupParams } from "../../core/application-params";



export class AppModule implements IAppModule {
        
    init(server: Hapi.Server, params: ApplicationStartupParams) {
        Routes(server, params);
    }


    public info(): ModuleInfo {
        return new ModuleInfo("User's Module", "1.0.0");
    }

}




export default():IAppModule => {
    return new AppModule();
};


