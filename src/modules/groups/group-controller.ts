
import { IDbConfiguration } from "../../core/application-interfaces";
import * as Hapi from "hapi";
import { Group } from "../../data/models";
import { GroupRepository } from "../../data/repository/group-repository";


export class GroupController {
    
    groupRepository:GroupRepository;

    constructor ( ) {
        this.groupRepository = new GroupRepository();
    }

    public listAllGroups( request:Hapi.Request, reply:Hapi.IReply ) {

        this.groupRepository.find('')
            .then( (records) =>  reply(records) )
            .error( (err) => reply(err) );
    }

    
    public findGroupsById( request:Hapi.Request, reply:Hapi.IReply ) {
        
        const id = parseInt( request.params.id );
            
            this.groupRepository.getById(id)
            .then( (records) =>  reply(records) )
            .error( (err) => reply(err) );

    }

}