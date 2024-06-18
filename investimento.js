import prompt from "prompt-sync";
let ler = prompt();


import { receiveNumber, write, receiveText } from "./exibicao.js";

export function investimento(saldo, saldoInvest, i, t){
    write('O retorno do investimento é de 10% do saldo ao mês');
    saldoInvest = receiveNumber('Quanto você quer investir?');

    while(saldoInvest > saldo){
        saldoInvest = receiveText('Você não tem saldo o suficiente digite outro valor ou C para cancelar')
    }   

    if(saldoInvest == 'C'){
        saldoInvest = 0
    }
    else{
    saldoInvest= Number(saldoInvest)  
    saldo = saldo - saldoInvest

    i = 10
    t= receiveNumber('Qual o tempo do investimento em meses?');


    saldoInvest = saldoInvest*((1+(i/100))**t)

    write('O valor que você investiu mais o rendimento do valor investido em '+t+' meses é igual a R$ ' + saldoInvest.toFixed(2));
    }    
    saldo = saldo + saldoInvest

    write(`O SEU SALDO FICA: ${saldo.toFixed(2)}`)

      return saldo.toFixed(2)
}

