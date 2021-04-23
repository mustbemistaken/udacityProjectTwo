/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

//create global variables to be used later. One selects the navbar ul html and the other selects all sections in the html
const navbuilder = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');


// build the navbar
const navBuilderFunction = () =>{

    //cycle through nodelist and insert html using the section id and grabbing unknown attribute from target
    for (let section of sections) {
        navbuilder.insertAdjacentHTML("beforeend", `<li><a class = "menu__link" href="#${section.id}">${section.getAttribute('data-nav')}</a></li>`);
      }
};

//call the function
navBuilderFunction();



//create function to check if in viewport
const checkIfActive = () => 

    sections.forEach( section => {

    //collects info of the element relating to viewport
    const rect = section.getBoundingClientRect();
    
    //returns a true or false value depending if element is in viewport
    let isInViewport =   (rect.top > -5 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.outerWidth || document.documentElement.clientWidth));

        //checks if its in or out of viewport and if the element does or doesn't have active class in it and toggles it
        if(isInViewport && !(section.classList.contains('your-active-class'))){
            section.classList.toggle('your-active-class');
        } else if( !(isInViewport) && (section.classList.contains('your-active-class'))){
            section.classList.toggle('your-active-class');
        }
            

});

//listening to all scrolling that occurs on the website
window.addEventListener('scroll',checkIfActive);

// Scroll to anchor ID using scrollTO event

const anchorScroll = () => {

    //select all links within the navbar
    const links = document.querySelectorAll('.navbar__menu a');

    for( let link of links){
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(e.target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    };
};

//call anchor scroll
anchorScroll();
