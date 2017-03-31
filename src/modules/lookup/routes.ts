import { EntityLookupController } from './entity-lookup-controller';
import * as Hapi from "hapi";
import * as Joi from "joi";
import { IApplicationConfiguration } from "../../core/application-interfaces";
import { ApplicationStartupParams } from "../../core/application-params";


export default function(server:Hapi.Server, params:ApplicationStartupParams) {


    // Not sure why but I think this is now a singleton!!!
    const controller = new EntityLookupController();

    server.bind(controller);


    server.route({
        method: 'POST',
        path: '/api/lookup/{entity_type}',
        config: {
            handler: controller.find,
            description: "Finds entities based on type",
            tags: ['api', 'lookup'],
            validate: {
                params: {
                    entity_type: Joi.string().required()
                },
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
        path: '/api/lookup/{entity_type}/{id}',
        config: {
            handler: controller.getById,
            description: "Returns a user object",
            tags: ['api', 'users'],
            validate: {
                params: {
                    id: Joi.string().required(),
                    entity_type: Joi.string().required()
                }
            }
        }
    });


}