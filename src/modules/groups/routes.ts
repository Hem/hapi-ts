import { join } from 'path';
import * as Hapi from "hapi";
import * as Joi from "joi";
import { IApplicationConfiguration } from "../../core/application-interfaces";
import { ApplicationStartupParams } from "../../core/application-params";
import { GroupController } from "./group-controller";


export default function(server:Hapi.Server, params:ApplicationStartupParams) {


    // Not sure why but I think this is now a singleton!!!
    const groupController = new GroupController();
    server.bind(groupController);


    server.route({
        method: 'POST',
        path: '/api/groups',
        config: {
            handler: groupController.listAllGroups,
            description: "Lists all groups",
            tags: ['api', 'groups'],
            validate: {
                payload: {
                    filter: Joi.string(),
                    pageSize: Joi.number().default(20),
                    pageIndex: Joi.number().default(1)
                }
            }
        }
    });


    server.route({
        method: 'GET',
        path: '/api/group/{id}',
        config: {
            handler: groupController.findGroupsById,
            description: "Returns a group object",
            tags: ['api', 'groups'],
            validate: {
                params: {
                    id: Joi.string().required()
                }
            }
        }
    });


}