import { User } from '../../data/models';
import { IApplicationConfiguration, IDbConfiguration } from "../../core/application-interfaces";
import * as Hapi from 'hapi';
import { UserRepository } from "../../data/repository/user-repository";


export default class UserController {

    userRepository: UserRepository;


    constructor( ) {
        this.userRepository = new UserRepository();
    }


    public findUsers( request: Hapi.Request, reply: Hapi.IReply ) {

            this.userRepository.find('oh')
            .then((value) => {
                    reply( value );
            })
            .error((err) => {
                reply(err);
            });
    }


    public getUserById(request:Hapi.Request, reply:Hapi.IReply) {

        const id = parseInt(request.params.id, 10);

        this.userRepository.getById(id)
            .then((value) => {
                    reply( value );
            })
            .error((err) => {
                reply(err);
            });
    }


    public getUserInfo( request: Hapi.Request, reply: Hapi.IReply ) {

        const id = parseInt(request.params.id, 10);

        reply( new User(id, "User Info for " + id) );
    }

}