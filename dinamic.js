let nav = document.createElement('nav');
let aHome = document.createElement('a');

// let aHamburg = document.createElement('a');
// let aRom = document.createElement('a');
// let aBarcellona = document.createElement('a');
// let aNewYork = document.createElement('a');
// let aMoskow = document.createElement('a');

// let elCities = [aHamburg, aRom, aBarcellona, aNewYork, aMoskow];

let arrayAElements = [];
let cities =['Hamburg','Rome','Barcellona','New York','Moscow'];

for (let i=0; i< 5; i++){
   arrayAElements.push(document.createElement('a'));
   nav.appendChild(arrayAElements[i]);
   arrayAElements[i].innerHTML = cities[i];
}

document.body.appendChild(nav);
