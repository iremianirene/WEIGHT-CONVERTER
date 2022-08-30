const stone = document.getElementById('stone');
const pound = document.getElementById('pound');
const gram= document.getElementById('gram');
const ounce = document.getElementById('ounce');
const instruction = document.getElementById('instruction');
const form = document.getElementById('form');
const convert= document.getElementById('convert');
const output = document.getElementById('output');

let convertType;


stone.onclick = function(){
    convertType ='stone'
    instruction.innerHTML = 'Type in a number of stone(s)' 
    
}
pound.onclick = function (){
    convertType = 'pound'
    instruction.innerHTML = 'Type in a number of pound(s)'
}
gram.onclick = function (){
    convertType = 'gram'
    instruction.innerHTML = 'Type in a number of gram(s)'
}
ounce.onclick = function (){
    convertType = 'ounce'
    instruction.innerHTML = 'Type in a number of ounce(s)'
}


// form submit
form.onsubmit = function(event){
    event.preventDefault();
    const number = document.getElementById('number').value;

    if (number) {
        if (convertType == "stone") {
            var result = number * 14;  
          output.innerHTML = `${number} stone(s) = ${ result} pound(s)`
        }
        else if (convertType == "pound") {
            let result = number * 0.0714;
            output.innerHTML =  `${number} pound(s) = ${ result} stone(s)`
        }
        else if (convertType == "gram") {
            let result = number * 0.0353;
            output.innerHTML =  `${number} gram(s) = ${ result} ounce(s)`  
        }
        else if (convertType == "ounce") {
            let result = number * 28;
            output.innerHTML =  `${number} ounce(s) = ${ result} gram(s)`
            
        }
    } else {
        output.innerHTML = 'Please Enter A Value!'
    }







}

