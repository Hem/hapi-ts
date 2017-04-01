import { IEntity } from '../core/interfaces';



    export class User implements IEntity {

        constructor(public id: number, public name: string) { }

    }

    export class UserPassword {
        constructor(public id: number, public username: string, public password: string) { }
    }

    export class Group implements IEntity {
        constructor(public id: number, public name: string) { }
    }
    


