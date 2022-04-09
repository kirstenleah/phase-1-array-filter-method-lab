// Code your solution here
// function findMatching(driversArr, driverName) {
// const newDriverArr = driversArr.filter(element => driverName.toLowerCase() === element.toLowerCase()) 
// console.log('this is the array', newDriverArr);
// return newDriverArr;
// }

// function fuzzyMatch(drivers, startsWith) {
//     return drivers.filter(
//         (saMatch) => saMatch.toLowerCase().indexOf(startsWith.toLowerCase()) === 0      
//     );
// };

// function matchName(drivers, elementMatch) {
//     return drivers.filter((fileReturn) => fileReturn.name === elementMatch);
// };

function findMatching(drivers, drivName) {
    return drivers.filter(element => element.toLowerCase() === drivName.toLowerCase())
}

function fuzzyMatch(drivers, lettMatch) {
    return drivers.filter(element => element.indexOf(lettMatch) === 0, 1)
}

function matchName(drivers, hometownObjStr) {
    return drivers.filter(element => element.name === hometownObjStr)
}