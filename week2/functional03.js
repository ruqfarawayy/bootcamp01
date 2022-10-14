// Masih di Immutability (Tidak Berubah)

const user = {
    firstName : 'Harry',
    lastName : 'Protter',
}

const renameLastNameUser = (newLastName, user) => {
    user.lastName = newLastName;
}

renameLastNameUser('Potter', user);

console.log(user);