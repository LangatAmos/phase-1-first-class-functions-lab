// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"]
const returnFirstTwoDrivers = function(){
    return drivers.slice(0,2);
};
const returnLastTwoDrivers = function(){
    return drivers.slice(2,4);
};

let selectingDrivers = [];
selectingDrivers[0] = returnFirstTwoDrivers;
selectingDrivers[1] = returnLastTwoDrivers;

const createFareMultiplier = function (fareMultiplier) {
    return function(value) {
      return fareMultiplier * value;
    }
}

const fareDoubler = function(fare){
    return fare * 2;
}

const fareTripler = function (fare){
    return fare *3;
}
const arrayOfDrivers = [...drivers];
const selectDifferentDrivers = function(arrayOfDrivers, firstTwo){
    return firstTwo(arrayOfDrivers);
}