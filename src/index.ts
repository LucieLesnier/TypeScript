import {Character} from "./character";
import {Enemy} from "./Enemy";


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
        let warrior = new Character(response.username, response.sex, 200);
        console.log('Ennemi en approche !');
        let {choice} = await (prompts)(choices);


        fight(choice, warrior);
        console.log(choice);



    }


)();


async function fight(choice: number, character: Character) {

    let enemy = new Enemy();
    while (character.life >= 0 && choice === 1) {
        enemy.summary()
        character.summary();
        character.attack(enemy);

        if (character.life >= 0) {
          enemy.life -=  character.attackPower;


            console.log(choice);
            console.log(enemy.life);

            if (enemy.life >= 0) {
                console.log('The enemy fight back');
                enemy.attack(character);
                character.life -=  Math.ceil(enemy.attackPower / 2.);
                console.log(character.life);

                let promptResult = await (prompts)(choices);
                choice = promptResult.choice;
                if(character.life <=0 || enemy.life <= 0) {

                }
            } else {
                console.log('win');
                return
            }
        } else {
            console.log('bye');
        }
    }


}

