import prompt from 'prompt-sync'
let ler= prompt();

import { write } from './exibicao.js';

export function menu(){
    
    write(` 
        
        1- Depositar;
        2- Sacar;
        3- Exibir saldo;
        4- Investir
        5- sair
        
        `);

        return menu;
}


