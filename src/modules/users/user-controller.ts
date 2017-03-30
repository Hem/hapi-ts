import { User } from '../../repository/models';
import { IApplicationConfiguration, IDbConfiguration } from "../../core/application-interfaces";
import * as Hapi from 'hapi';


export default class UserController {

    constructor(public dbConfig:IDbConfiguration ) {}


    public findUsers( request: Hapi.Request, reply: Hapi.IReply ) {

        reply([ 
            new User(1, "User for 1"),
            new User(2, "User for 2")
         ]);
    }


    public getUserById(request:Hapi.Request, reply:Hapi.IReply) {

        const id = parseInt(request.params.id, 10);

        reply( new User(id, "Name for " + id) );
    }


    public getUserInfo( request: Hapi.Request, reply: Hapi.IReply ) {

        const id = parseInt(request.params.id, 10);

        reply( new User(id, "User Info for " + id) );
    }

}