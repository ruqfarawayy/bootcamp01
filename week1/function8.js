//soal kesekian ...

function a(){
    function dimension1 () {
        return 'gigantic';
    }

    function dimension2 () {
        return 'enormous';
    }
    return dimension2();
    return dimension1();
}

console.log(a());