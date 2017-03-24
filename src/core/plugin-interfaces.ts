import * as Hapi from "hapi";
import { IApplicationConfiguration } from "./application-interfaces";


export interface IPluginInfo {    
    
    name: string;
    
    version: string;
}


export interface IPlugin {

    register(server: Hapi.Server, appConfig: IApplicationConfiguration);

    info():IPluginInfo;
}


export class PluginInfo implements IPluginInfo {

    constructor(public name:string, public version:string) {}
    
}