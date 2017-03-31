import { ILookupRepositoryFactory } from '../../core/irepository';
import { LookupRepositoryFactory } from '../../data/repository/lookup-repository-factory';
import * as Hapi from 'hapi';

export class EntityLookupController {

    lookupRepositoryFactory : ILookupRepositoryFactory = new LookupRepositoryFactory();

    // POST: /api/lookup/{entity_code} 
    find ( request:Hapi.Request, reply: Hapi.IReply ) {

        const type = request.params.entity_type;
        const payload = request.payload;

        const repo = this.lookupRepositoryFactory.getRepository(type);

        console.info(payload);
        
        repo.find (payload.filter)
            .then ((value) => {
                reply(value);
            })
            .error( (err) => reply(err) );

    }

    // POST: /api/lookup/{entity_code}/{id}
    getById ( request: Hapi.Request, reply: Hapi.IReply ) {
        
        const type = request.params.entity_type;
        const id = request.params.id;

        const repo = this.lookupRepositoryFactory.getRepository(type);


        repo.getById (id)
            .then((value) => {
                reply(value);
            })
            .error( (err) => reply(err) );

    }

}