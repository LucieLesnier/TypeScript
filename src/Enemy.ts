import {Character} from "./character";

export class Enemy implements Fighter{
    name: string;
    life: number;
    attackPower: number;

    constructor() {
        this.name = 'Goblins';
        this.life = 200;
        this.attackPower = Math.ceil(Math.random() * 100);
    }

    summary() {
        console.log(this);
    }
    attack(charac : Character) {
        console.log('The Enemy handle you ' + this.attackPower + ' points life ');

        return charac.name
    }




}