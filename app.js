import prompt from 'prompt-sync'
let ler= prompt();

import { menu } from "./menu.js";
import { investimento } from "./investimento.js";
import {depositar, sacar, exibirSaldo} from "./financeiro.js";
import {write, receiveText} from "./exibicao.js";

write('INFORME SEU SALDO')
let confirm = true
let saldo = Number(ler())

while(confirm){
    if(saldo >= 0){
        confirm = false
    }

    else{
    console.log('Digite um número válido')
saldo= Number(ler())
}
}

menu();
let escolha= receiveText('ESCOLHA UMA OPÇÃO ACIMA ');

while(escolha!= '5'){    

if(escolha== '1'){ 

let deposito= depositar(saldo);
write(deposito);
saldo= deposito;
}

else if(escolha=='2'){

let saque= sacar(saldo);
write(saque);
saldo= saque;
}

else if(escolha=='3'){

exibirSaldo(saldo);
}

else if(escolha == '4'){

let invest= investimento(saldo)
write(invest)
saldo = invest;
}


else if(escolha == '5'){
    write('OBRIGADO POR USAR NOSSO SISTEMA. VOLTE SEMPRE!')
}

else{

    write('OPÇÃO INVÁLIDA')
}

menu();
escolha= receiveText('ESCOLHA OUTRA OPÇÃO')
}

write('OBRIGADO POR USAR NOSSO SISTEMA. VOLTE SEMPRE!')