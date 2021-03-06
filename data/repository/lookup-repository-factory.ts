import { ILookupRepository, ILookupRepositoryFactory } from '../core/interfaces';
import { GroupRepository } from './group-repository';
import { UserRepository } from './user-repository';


export class LookupRepositoryFactory implements ILookupRepositoryFactory {
    

    public getRepository(type: string): ILookupRepository {

        switch ( type.toLowerCase() ) {
            
            case 'user' : 
            case 'users' : {
                return new UserRepository();
            }

            case 'group' : 
            case 'groups' : {
                return new GroupRepository();
            }

            default : {
                throw new Error(`Unknown ILookupRepository: ${type}`);
            }
        }

    }
}