import {Character} from "./character";

export  class Wizard extends Character {
    abilities: number;

    constructor(name: string, sex: string, life: number) {
        super(name, sex, life);
        this.abilities = 100;
    }
}
