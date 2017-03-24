import * as Hapi from "hapi";
import { IApplicationConfiguration } from "../../core/application-interfaces";
import { ApplicationStartupParams } from "../../core/application-params";
import { GroupController } from "./group-controller";


export default function(server:Hapi.Server, params:ApplicationStartupParams) {


    // Not sure why but I think this is now a singleton!!!
    const groupController = new GroupController(params.dbConfiguration);
    server.bind(groupController);


    server.route({
        method: 'GET',
        path: '/api/groups',
        config: {
            handler: groupController.listAllGroups,
            description: "Lists all groups",
            tags: ['api', 'groups']
        }
    });


    server.route({
        method: 'GET',
        path: '/api/group/{id}',
        config: {
            handler: groupController.findGroupsById,
            description: "Returns a group object",
            tags: ['api', 'groups']
        }
    });


}