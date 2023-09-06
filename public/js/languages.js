/* I want only the first language available, 
to change it I need to click on the language and have access 
to an hidden menu with the two other languages */

/* I select my differents class. The first one, will be the one to click on
 and the second one is the one to open the hidden bar*/
const french = document.querySelector('.french_language')
const hiddenBar = document.querySelector('.language_hidden')

french.addEventListener('click', (event) => {
    hiddenBar.classList.toggle('visible');
})