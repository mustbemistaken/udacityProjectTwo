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

const sections = document. querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navBuilderFunction = () =>{

    //cycle through every section object grabbed above. using nodeclass method foreach to cycle through.
    sections.forEach( section => {

        //collect data to be used for the innerhtml. id of section and the data nav
        const sectionID = section.id;
        const sectionDataNAV = section.getAttribute('data-nav');
        
        //add html to navbuilder then use this to attach to append to the navbuilder element
        navbuilder.insertAdjacentHTML("beforeend", `<li><a class = "menu__link" href="#${sectionID}">${sectionDataNAV}</a></li>`);
    });
};

//call the function
navBuilderFunction();

// Add class 'active' to section when near top of viewport

//remove active class from section
const removeActive = (section) => {
    section.classList.remove('your-active-class');
};


//add active class to section
const addActive = (condition, section) => {
    if(condition == true){
        section.classList.add('your-active-class');
    } else{
        removeActive(section);
    };
}


//create function to check if in viewport
const checkIfActive = () => sections.forEach( section => {

    //collects info the element relating to viewport
    const rect = section.getBoundingClientRect();
    
    //returns a true or false value depending if element is in viewport
     let isInViewport =   (rect.top > -5 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.outerWidth || document.documentElement.clientWidth));

        addActive(isInViewport, section);

});

//listening to all scrolling that occurs on the website
window.addEventListener('scroll',checkIfActive);

// Scroll to anchor ID using scrollTO event

const anchorScroll = () => {

    //select all links within the navbar
    const links = document.querySelectorAll('.navbar__menu a');

    //listen to clicks for each link created in the navbar. if selected, it will scroll to the appropriate section
    links.forEach( link =>{
        link.addEventListener('click', function (e) {

            e.preventDefault();
            document.querySelector(e.target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

//call anchor scroll
anchorScroll();
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
