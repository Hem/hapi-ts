import { ApplicationStartupParams } from './application-params';
import * as Hapi from 'hapi';


export interface IAppModule {

    init(server: Hapi.Server, params: ApplicationStartupParams);

    info() : ModuleInfo;
}

export class ModuleInfo {

    constructor(public name:string, public version:string ) {}
    
}