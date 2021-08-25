import {Enemy} from "./Enemy";
import {Fighter} from "./Fighter";
import {Weapon} from "./Weapon";
export  abstract class Character implements Fighter {

    name: string;
    sex: string;
    life: number;
    attackPower: number;

   protected constructor(name: string, sex: string, life: number) {

        this.name = name;
        this.sex = sex;
        this.life = life;
        this.attackPower = Math.ceil(Math.random() * 100);


    }
        getName() {
        return this.name;
        }
        getSex() {
        return this.sex;
        }
        getLife() {
        return this.life;
        }
        getAttackPower() {
        return this.attackPower;
        }
    summary() {

        console.log(this);


    }

    attack(fighter: Enemy) {

        console.log('You handle ' + this.attackPower + ' points life to your enemy');

        return fighter.life -= Math.ceil(this.attackPower);


    }

    takeDamage(damage: number): void {
        damage = this.life -50;
     console.log(damage);
    }

}


