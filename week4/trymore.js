let data = [5,2,4,6,1,3];


    for (let index1 = 1; index1<data.length; index1++) {
        for(let index2 = 0; index2<data.length; index2++){
            if(data[index1] < data[index2]){
                let dataBaru = data[index1];
                data[index1] = data[index2];
                data[index2] = dataBaru;
            }
        }    
    }


console.log(data)