const sortArr = (sortType, arr) => sortType === 'asc' ? arr.sort( (a,b) => a.nik - b.nik) : arr.sort((a,b) => b.nik - a.nik);

function sortData(order){
   let sorted = sortArr(order, profiles)
    tampilData(sorted);
};

module.exports = {sortArr, sortData};
