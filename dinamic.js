let nav = document.createElement('nav');
let div = document.createElement('div');
let citiesContent =['Hamburg','Rome','Barcellona','New York','Moscow'];

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
   nav.appendChild(arrayAElements[i]);
   arrayAElements[i].innerHTML = citiesContent[i];

   sections.push(document.createElement('SECTION'));
   document.body.appendChild(sections[i]);
   sections[i].style.background = `url(${[i+1]}.jpg)`;
   sections[i].style.backgroundSize = 'cover';

   headings.push(document.createElement('H1'));
   sections[i].appendChild(headings[i]);
   headings[i].innerText = citiesContent[i];
   div.appendChild(sections[i]);
}
     let img = document.createElement('IMG');
     img.src='sky.jpg';
     // document.body.appendChild(img);
     document.body.style.backgroundImage = "url('sky.jpg')";
      window.addEventListener("scroll", function(ev){
        // let scrolled = window.pageYOffset;
        // const background =
        for(let i=1;i<sections.length;i++){
            if(window.pageYOffset >= sections[i].offsetTop-300){
              sections[i].classList.add("active");
            }
         }
      })


   document.body.appendChild(nav);
   document.body.appendChild(div);


   // would work also document.body.addEventListener
