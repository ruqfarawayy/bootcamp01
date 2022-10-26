function repeat (param1,param2,callback) {
    string = param1;
    for (let i = 1; i < param2; i++){
        string = callback(string);
    }
    return string;
}

function seru (str){
    return `${str}!`
}


console.log(repeat('Pergilah', 4, seru));
// console.log(seru('pergi'));

