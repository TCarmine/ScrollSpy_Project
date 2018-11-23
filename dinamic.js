let nav = document.createElement('nav');
let citiesContent =['Hamburg','Rome','Barcellona','New York','Moscow'];
let sectionContent =['Hamburg','Rome','Barcellona','New York','Moscow'];

// let aHamburg = document.createElement('a');
// let aRom = document.createElement('a');
// let aBarcellona = document.createElement('a');
// let aNewYork = document.createElement('a');
// let aMoskow = document.createElement('a');

// let elCities = [aHamburg, aRom, aBarcellona, aNewYork, aMoskow];

let arrayAElements = [];
let sections = [];
let headings = [];


for (let i=0; i < 5; i++){
   arrayAElements.push(document.createElement('a'));
   sections.push(document.createElement('SECTION'));
   headings.push(document.createElement('H1'));
   arrayAElements[i].innerHTML = citiesContent[i];
   sections[i].appendChild(headings[i]);
   nav.appendChild(arrayAElements[i]);
   document.body.appendChild(sections[i]);

}




document.body.appendChild(nav);
