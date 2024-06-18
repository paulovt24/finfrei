import prompt from 'prompt-sync'
let ler= prompt();


export function write(message){

console.log(message);

}

export function receiveText(message){

    console.log(message);
    let text= ler();
    
    return text;
    }

export function receiveNumber(message){

        console.log(message);
        let number= Number(ler());
        
        return number;
        }

 
