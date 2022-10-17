const matrix2x2 = [
    [2,9],
    [3,8],
]

// const matrix3x3 = [
//     [2,9,7],
//     [3,8,5],
//     [5,4,6],
// ]

// [0][0] = 2
// [0][1] = 9
// [0][7] = 7

// [1][0] = 3
// [1][1] = 8
// [1][2] = 5

// [2][0] = 5
// [2][1] = 4
// [2][2] = 6


// const matrix4x4 = [
//     [2,9,5,4], 
//     [3,8,3,8],
//     [2,3,7,9], 
//     [3,7,3,6],
// ]


let temporary = 0;

for (let i in matrix4x4 ){
    for (let j in matrix4x4){
        if(i == j) {
            temporary = temporary + matrix4x4[i][j]
        }
    }
}

console.log(temporary);
