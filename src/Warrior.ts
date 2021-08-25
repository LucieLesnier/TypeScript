import {Character} from "./character";

export class Warrior extends Character {

 abilities : number;

 constructor(name: string, sex: string, life: number) {
        super(name, sex, life);
     this.abilities = this.life + 100;
    }
    getAbilities() {
     return this.abilities;
    }



}