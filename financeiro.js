import prompt from 'prompt-sync'
import {  write } from './exibicao.js';
let ler= prompt();


export function depositar(saldo){  
  let saldo2=0
  let confirma = true
  console.log('QUANTO DESEJA DEPOSITAR?');
  let dinheiro= ler()

  
  
     while(confirma){   
    if(Number(dinheiro) > 0){
      confirma = false
    }

      else{
      console.log('VALOR INVÁLIDO. DIGITE O VALOR NOVAMENTE. SE DESEJA CANCELAR A OPERAÇÃO, DIGITE C');
      dinheiro= ler()
      
  
      if (dinheiro=='C'){
  
         confirma = false
        
           }
      }
      
    }
    if(dinheiro == 'C'){
      dinheiro = '0'
    }
  
  
  dinheiro = Number(dinheiro)
  saldo2= saldo + dinheiro;
  

  
  write(`O SEU SALDO FICA: ${saldo2}`)

  return saldo2

}


export function sacar(saldo){  
  let saldo2=0
  let confirma = true
  console.log('QUANTO DESEJA SACAR?');
  let dinheiro= ler()

  
  
while(confirma){   
    if(Number(dinheiro) > 0 && (saldo - Number(dinheiro)) >= 0){
      confirma = false
    }
   else if(saldo - Number(dinheiro) < 0){
      console.log('VOCE NAO TEM SALDO O SUFICIENTE DIGITE OUTRO VALOR')
      dinheiro=ler()
   }
      else{
      console.log('VALOR INVÁLIDO. DIGITE O VALOR NOVAMENTE. SE DESEJA CANCELAR A OPERAÇÃO, DIGITE C');
      dinheiro= ler()
      
  
      if (dinheiro=='C'){
  
         confirma = false
        
           }
      }
      
}
  
    if(dinheiro == 'C'){
      dinheiro = '0'
    }
  
  
  dinheiro = Number(dinheiro)
  saldo2= saldo - dinheiro;
  
  
  write(`O SEU SALDO FICA: ${saldo2}`)

  return saldo2
  
  }



    export function exibirSaldo(saldo){
        
          write('SEU SALDO ATUAL É DE: ' + saldo);
        
          return exibirSaldo;
        
    }