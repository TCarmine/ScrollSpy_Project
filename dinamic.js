let nav = document.createElement('nav');
let aHome = document.createElement('a');
// let aGroup = aHome*5;

// let aHamburg = document.createElement('a');
// let aRom = document.createElement('a');
// let aBarcellona = document.createElement('a');
// let aNewYork = document.createElement('a');
// let aMoskow = document.createElement('a');

// let elCities = [aHamburg, aRom, aBarcellona, aNewYork, aMoskow];

let arrayAElements = [];
for(n=0; n<5;n++){
  arrayAElements.push(document.createElement('a'));
}

let cities =['Hamburg','Rome','Barcellona','New York','Moscow'];

for (let i=0; i< arrayAElements.length; i++){
   nav.appendChild(arrayAElements[i]);
   arrayAElements[i].innerHTML = cities[i];
}


//nav.appendChild(aGroup);

document.body.appendChild(nav);
// document.body.insertAdjacentElement(nav);
