import {Character} from "./character";
import {Fighter} from "./Fighter";

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

    attack(fighter: Character) {
        console.log('The Enemy handle you ' + this.attackPower + ' points life ');

        return fighter.life -= Math.ceil(this.attackPower / 2);

    }

    takeDamage(damage: number) {
 damage = this.life - 50;
        console.log(damage);
    }
}