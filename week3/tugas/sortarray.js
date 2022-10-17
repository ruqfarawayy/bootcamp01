let data = ['string', 'number', 'float'] ;

const reversing = (str) => {
    let temp = "";
    for (let i = str.length-1; i >= 0; i--){
        temp += str[i];
    }
    return temp;
}

const reverseData = data.map(reversing);

// console.log(reverseData);



















// diBalik = data.split("");
// reverseArray = diBalik.reverse();
// joinReverse = reverseArray.join("");

// console.log(joinReverse);

// function diBalik (arr) {
//     let strArr = arr.map();
//     let reverseArray = strArr.reverse();
//     let reversedString = reverseArray.join("");
//         return reversedString
// }