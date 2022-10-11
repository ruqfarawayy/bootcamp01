const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kyle Renn',
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);