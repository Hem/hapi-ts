export interface IEntity {
    id: number;
    name: string;
}


export class User implements IEntity {
    constructor(public id:number, public name:string) {}
}

export class Group implements IEntity {
    constructor(public id:number, public name:string) {}
}