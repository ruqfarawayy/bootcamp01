let arr = [5,2,4,6,1,3];

let arr2 = [6, 9, 7, 8, 34];

let arr3 = [4, 1, 7, 9, 3, 28];

let arr4 = [800, 567, 234, 564, 785]

function susunan (data){
    for (let index1 = 1; index1<data.length; index1++) {
        for(let index2 = 0; index2<data.length; index2++){
            if(data[index1] < data[index2]){
                let dataBaru = data[index1];
                data[index1] = data[index2];
                data[index2] = dataBaru;
            }
        }    
    }
    return data;
}

console.log(susunan(arr));
console.log(susunan(arr2));
console.log(susunan(arr3));
console.log(susunan(arr4));