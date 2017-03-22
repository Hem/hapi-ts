import { IApplicationConfiguration, IDbConfiguration } from "../../core/config-interfaces";
import { User } from "./user";
import * as Hapi from "hapi";


export default class UserController {

    constructor( dbConfig:IDbConfiguration ) {}


    public findUsers( request: Hapi.Request, reply: Hapi.IReply ) {

        reply([ 
            new User("1", "User for 1"),
            new User("2", "User for 2")
         ]);
    }


    public getUserById(request:Hapi.Request, reply:Hapi.IReply) {
        const id = request.params.id;

        reply( new User(id, "Name for " + id) );
    }


    public getUserInfo( request: Hapi.Request, reply: Hapi.IReply ) {

        const id = request.params.id;

        reply( new User(id, "User Info for " + id) );
    }

}