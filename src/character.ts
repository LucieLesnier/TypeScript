import {Enemy} from "./Enemy";
export class Character implements Fighter{

    name: string;
    sex: string;
    life: number;
   attackPower : number;

    constructor(name : string, sex : string, life : number) {

    this.name = name;
    this.sex = sex;
    this.life = life;
    this.attackPower = Math.ceil(Math.random() * 100);


    }

summary() {

    console.log(this);


}

    attack(enemy: Enemy) {

        console.log('You handle ' + this.attackPower + ' points life to your enemy');

        return enemy.name
    }

}


