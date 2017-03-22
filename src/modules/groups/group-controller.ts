
import { IDbConfiguration } from "../../core/config-interfaces";
import * as Hapi from "hapi";
import { Group } from "./group";


export class GroupController {
    
    constructor (dbConfig : IDbConfiguration ) {}


    public listAllGroups( request:Hapi.Request, reply:Hapi.IReply ) {

        reply([
            new Group("1", "Name for 1" ),
            new Group("2", "Name for 2" )
        ]);
    }

    
    public findGroupsById( request:Hapi.Request, reply:Hapi.IReply ) {
        
        const id = request.params.id;

        reply(new Group(id, "Name for Group" + id));
    }

}