// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

returnFirstTwoDrivers(['Sally', 'Bob']);

const returnLastTwoDrivers = (drivers) => drivers.slice(drivers.length - 2); 

returnLastTwoDrivers(['Julia','Maggie','Greg','Peaches']);

/*function selectingDrivers(drivers) {
    [
    returnFirstTwoDrivers(drivers),
    returnLastTwoDrivers(drivers),
    ]
}*/

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

selectingDrivers[0](['Blebbie',  'Flebbie', 'Clebbie']);

function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer;
    }
}

createFareMultiplier(4)(4);

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare);
}

const fareTripler = fare => createFareMultiplier(3)(fare);

function selectDifferentDrivers(drivers, selectingDrivers){
    return selectingDrivers(drivers);
}