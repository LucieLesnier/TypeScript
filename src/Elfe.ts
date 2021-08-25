import {Character} from "./character";

export class Elfe extends Character {


    abilities: number;

    constructor(name : string, sex: string, life : number) {
        super(name, sex, life);
        this.abilities = 200;
    }

    moreAll() {
        this.abilities = this.life + this.abilities;
        return this.abilities;
    }
}