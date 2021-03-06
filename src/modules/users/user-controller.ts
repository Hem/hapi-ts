import * as repl from 'repl';
import * as Hapi from 'hapi';
import { IApplicationConfiguration, IDbConfiguration } from "../../core/application-interfaces";
import { UserRepository } from "../../../data/data-module";


export default class UserController {

    userRepository: UserRepository;


    constructor () {
        this.userRepository = new UserRepository();
    }



    // POST: /api/users 
    // { filter: text, } 
    public findUsers( request: Hapi.Request, reply: Hapi.IReply ) {

            console.info("request.path", request.path);
            console.info("request.payload", request.payload);
            console.info("request.params", request.params);
            console.info("request.query", request.query);

            const filter = request.payload.filter;
            
            this.userRepository.find( filter )
            .then((value) => {
                    reply( value );
            })
            .error((err) => {
                reply(err);
            });
    }


    
    // GET: /api/user/{id}
    public getUserById (request:Hapi.Request, reply:Hapi.IReply) {

        const id = parseInt(request.params.id, 10);

        this.userRepository.getById(id)
            .then((value) => {
                    reply( value );
            })
            .error((err) => {
                reply(err);
            });
    }


}