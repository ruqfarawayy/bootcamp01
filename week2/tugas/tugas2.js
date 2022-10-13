let array = [4,5,7,2,3,6,13,15,2,21];

function kelipatan(){
    var place = [];
    for (let element of array){
        if (element % 3 == 0) {
            place.push(element);
        }
    }
    return place;
};

console.log(kelipatan());

