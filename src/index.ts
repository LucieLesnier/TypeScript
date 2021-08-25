import {Character} from "./character";
import {Enemy} from "./Enemy";
import {Warrior} from "./Warrior";
import {Fighter} from "./Fighter";
import {Wizard} from "./Wizard";
import {Elfe} from "./Elfe";
import {Weapon} from "./Weapon";

const prompts = require('prompts');

const
    questions = [
        {
            type: 'text',
            name: 'username',
            message: 'What is your username?'
        },
        {
            type: 'text',
            name: 'sex',
            message: 'What is your genre ?'
        },

    ];
const characterChoices = [

    {
        type: 'select' +
            '',
        name: 'characterChoice',
        message: 'Choose your character',
        choices: [
            {title: 'Warrior', value: 0},
            {title: 'Wizard', value: 1},
            {title: 'Elf', value: 2}
        ],
    }
];
const weaponsChoices = [

    {
        type: 'select' +
            '',
        name: 'weaponsChoice',
        message: 'Choose your character',
        choices: [
            {title: 'Sword', value: 0},
            {title: 'Knife', value: 1},
            {title: 'MorningStar', value: 2},
            {title: 'Vegetable', value: 3}
        ],
    }
];
const choices = [

    {
        type: 'select' +
            '',
        name: 'choice',
        message: 'Do you want to fight ? - Press 1 for yes and 0 for no',
        choices: [
            {title: 'Yes', value: 1},
            {title: 'no', value: 0},
        ],
    }
];

(

    async () => {
        const response = await (prompts)(questions);


        let choose = await (prompts)(characterChoices);

        // let {choice} = await (prompts)(choices);

        console.log('Ennemi en approche !');
        await fight(choose, choose.characterChoice);
        console.log(choose);

    }


)();


async function fight(choice: number, character: Character) {

    let enemy = new Enemy();

    if (character instanceof Warrior || character instanceof Wizard || character instanceof Elfe || true) {
        chooseCharacter(choice, character.name, character.sex, 200)
        while (character.life >= 0 && (choice === 0|| choice === 1 || choice === 2)) {

            enemy.summary()
            character.summary();

            character.attack(enemy);
            if (character.life >= 0) {
                if (enemy.life -= character.attackPower) {

                }


                console.log(choice);
                console.log(enemy.life);

                if (enemy.life >= 0) {
                    console.log('The enemy fight back');
                    enemy.attack(character);
                    character.life -= Math.ceil(enemy.attackPower / 2);
                    console.log(character.life);


                    let promptResult = await (prompts)(choices);
                    choice = promptResult.choice;
                    if (character.life <= 0 || enemy.life <= 0) {

                    }
                } else {
                    console.log('win');
                    return;
                }
            } else {
                console.log('bye');
                return;
            }
        }
    }
}


function chooseCharacter(choice: number, name: string, sex: string, life: number) {
    let char: Character;
    if (choice === 0) {
        char = new Warrior(name, sex, life);


        console.log(char)
    } else if (choice === 1) {
        char = new Wizard(name, sex, life);
        console.log(char)
    } else {
        char = new Elfe(name, sex, life);
        console.log(char);
    }
    return char;
}

