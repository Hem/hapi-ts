import * as Hapi from "hapi"
import Routes from "./routes";
import {  ApplicationStartupParams } from "../../core/application-params";

/**
 * Module init
 * @param server 
 * @param params 
 */
export function init(server: Hapi.Server, params: ApplicationStartupParams) {
    Routes(server, params);
}