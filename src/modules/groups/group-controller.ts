
import { IDbConfiguration } from "../../core/application-interfaces";
import * as Hapi from "hapi";
import { Group } from "../../data/models";


export class GroupController {
    
    constructor ( private dbConfig : IDbConfiguration ) {}

    public listAllGroups( request:Hapi.Request, reply:Hapi.IReply ) {

        reply([
            new Group(1, "Name for 1" ),
            new Group(2, "Name for 2" )
        ]);
    }

    
    public findGroupsById( request:Hapi.Request, reply:Hapi.IReply ) {
        
        const id = parseInt( request.params.id );

        reply(new Group(id, "Name for Group" + id));
    }

}