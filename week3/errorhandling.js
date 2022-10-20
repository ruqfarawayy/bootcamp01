function getErrorInObject() {
    try {
        nonExistentFunction();
    } catch (errorVariable){
        return {
            nama:errorVariable.name,
            pesan:errorVariable.message,
            susunan:errorVariable.stack
            }
        }
    }   
console.log(getErrorInObject());
