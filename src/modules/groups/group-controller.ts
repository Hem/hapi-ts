
import * as Hapi from 'hapi';
import { IDbConfiguration } from "../../core/application-interfaces";
import { GroupRepository } from "../../../data/data-module";


export class GroupController {
    
    groupRepository:GroupRepository;

    constructor ( ) {
        this.groupRepository = new GroupRepository();
    }

    public listAllGroups( request:Hapi.Request, reply:Hapi.IReply ) {

        console.info("request.path", request.path);
        console.info("request.payload", request.payload);
        console.info("request.params", request.params);
        console.info("request.query", request.query);

        const filter = request.payload.filter;

        // tslint:disable-next-line:
        this.groupRepository.find(filter)
            .then( (records) =>  reply(records) )
            .error( (err) => reply(err) );
    }

    
    public findGroupsById( request:Hapi.Request, reply:Hapi.IReply ) {
        
        
        const id = parseInt( request.params.id , 10);
            
            this.groupRepository.getById(id)
            .then( (records) =>  reply(records) )
            .error( (err) => reply(err) );

    }

}