document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.add('fade-in');
    });
    
    const projectMenu = document.querySelector('.nav-link[href="#projects"]');  
    const projectContent = document.querySelector('#projects');  
    const image = document.querySelector('#project-image');  
    const details = document.querySelector('#project-details');  

    projectMenu.addEventListener('click', function(event) {
        event.preventDefault();  

        projectContent.style.display = 'block';  
        image.style.display = 'block';  
        details.style.display = 'block';  
    });
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 150) {
            section.classList.add('fade-in-visible');
        }
    });
});

window.onload = function() {
    window.location.hash = "#profile";
};