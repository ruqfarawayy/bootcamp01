function delData(i) {
    // console.log(i);
    profiles.splice(i,1);
    tampilData();
};

module.exports = { delData };