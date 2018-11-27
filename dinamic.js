let nav = document.createElement('nav');
let div = document.createElement('div');
let citiesContent =['Hamburg','Rome','Barcelona','New York','Moscow'];

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
   arrayAElements[i].setAttribute('href',`#${i}`);


   sections.push(document.createElement('SECTION'));
   document.body.appendChild(sections[i]);
   sections[i].style.background = `url(${[i+1]}.jpg)`;
   // sections[i].setAttribute('id',`${i}`);
   sections[i].style.backgroundSize = 'cover';
   // create dinamically an id for each section
   sections[i].id = `${i}`;

   headings.push(document.createElement('H1'));
   sections[i].appendChild(headings[i]);
   headings[i].innerText = citiesContent[i];
   div.appendChild(sections[i]);

   // let changeLink = (e) => {
   //    arrayAElements[i].
   // }
   //
   // arrayAElements.addEventListener('click', changeLink);
}

document.body.appendChild(nav);
document.body.appendChild(div);

     let img = document.createElement('IMG');
     img.src='sky.jpg';
     // document.body.appendChild(img);
     document.body.style.backgroundImage = "url('sky.jpg')";
     document.body.style.backgroundSize = 'cover';
     document.body.style.backgroundAttachment = 'fixed';



     let sectionsDistance = [];
     for (let i = 0; i < sections.length; i++) {
       sectionsDistance.push(sections[i].offsetTop);
     }

     window.addEventListener("scroll", function(ev){
        // let scrolled = window.pageYOffset;
        // const background =
        for(let i=0;i < sections.length;i++){
            // if(window.pageYOffset >= sections[i].offsetTop-300){
                if (window.pageYOffset >= sectionsDistance[i]-250 && window.pageYOffset < sectionsDistance[i]+150){
                     sections[i].classList.add("active");
                     arrayAElements[i].style.background = 'red';
                } else {
                     sections[i].classList.remove('active');
                     arrayAElements[i].style.background = 'skyblue';
                }
         }
      })

window.addEventListener('click', function(ev) {

      for (let i = 0; i < sections.length; i++) {

        // if (window.pageYOffset >= posters[i].offsetTop - heightToExecute && window.pageYOffset < posters[i+1].offsetTop - heightToExecute) {
          for (let j = 0; j < arrayAElements.length; j++) {

               sections[i].classList.add("active");
               arrayAElements[i].style.background = 'red';
               break;
            // if (titles[j].classList.contains('changeColor')) {
            //   titles[j].classList.remove('changeColor');
            //   break;
            // }
          }
          titles[i].classList.add('changeColor');
          posters[i].style.opacity = '1';
        }



})





   // would work also document.body.addEventListener
