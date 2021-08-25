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
const fightChoice = [

    {
        type: 'select' +
            '',
        name: 'choiceP',
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
        let myCharacter = await chooseCharacter(choose.characterChoice, response.username, response.sex, 200)

        do {
            await fight(myCharacter);
        } while (myCharacter.life > 0)
    }


)();


async function fight(character: Character) {

    let enemy = new Enemy();
    console.log('Ennemi en approche !');
    let fightIsRunning = 1

    do {
        let promptResult = await (prompts)(fightChoice);
        if (promptResult.choiceP === 1) {
            enemy.summary()
            character.attack(enemy);
            if (enemy.life > 0) {
                console.log(enemy.life);
                console.log('The enemy fight back');
                enemy.attack(character);
                console.log(character.life);
            }
        } else {
            console.log('You escape from the battle, bitch')
            fightIsRunning = 0
        }
    } while (character.life > 0 && enemy.life > 0 && fightIsRunning == 1)
    if (enemy.life <= 0) {
        console.log('He die, little bitch')
    } else {
        console.log('You die, bitch')
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

