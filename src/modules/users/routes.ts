import * as Hapi from "hapi";
import { IApplicationConfiguration } from "../../core/config-interfaces";
import { ApplicationStartupParams } from "../../core/application-params";
import UserController from "./user-controller";

export default function(server:Hapi.Server, params:ApplicationStartupParams) {


    // Not sure why but I think this is now a singleton!!!
    const userController = new UserController(params.dbConfiguration);
    server.bind(userController);


    server.route({
        method: 'GET',
        path: '/api/users',
        config: {
            handler: userController.findUsers,
            description: "finds all users matching filter criteria",
            tags: ['api', 'users']
        }
    });


    server.route({
        method: 'GET',
        path: '/api/user/{id}',
        config: {
            handler: userController.getUserById,
            description: "Returns a user object",
            tags: ['api', 'users']
        }
    });

    server.route({
        method: 'GET',
        path: '/api/user/{id}/info',
        config: {
            handler: userController.getUserInfo,
            description: "Returns the user info object"
        }
    });


}