function greeting(name, language) {
    if(language === "english") {
        return `good morning ${name}!`
    } else if (language === "French") {
        return `Bonjour ${name}!`
    } else {
        return `Selamat Pagi${name}!`
    }
}

let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);