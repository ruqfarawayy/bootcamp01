function doIt (){
    try {
        return 'from try block'
    } catch {
        return 'from catch block'
    } finally {
        return 'from block finally'
    }
}

console.log(doIt());