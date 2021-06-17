const tl = gsap.timeline({defaults: {ease: "power1.out"}});
const covidPage = gsap.timeline({defaults: {ease: "power1.out"}});

tl.fromTo('nav', {opacity: 0}, {delay: 0.5, opacity: 1});

//URL Shortener
//tl.fromTo('.url-land-text', {opacity: 0}, {y:"0%", opacity:1, duration:1, stagger:0.25}, "-=0.5");
//tl.fromTo('.url-body-text', {opacity: 0}, {opacity: 1, y:"0%", stagger:0.25});

//Individual project pages animations
covidPage.fromTo('.project-landing', {opacity: 0}, {delay:1, opacity: 1});
covidPage.fromTo('.project-land-text', {opacity: 0}, {delay: 1,y:"0%", opacity:1, duration: 1, stagger: 0.25}, 0.25);
covidPage.fromTo('.project-body-text', {opacity: 0}, {y:"0%", opacity:1, duration: 1, stagger: 0.15}, 1.5);

covidPage.fromTo('.project-image-landing', {opacity: 0}, {opacity: 1}, 1);
covidPage.fromTo('.project-header-text', {opacity:0}, {y:"0%", opacity: 1, duration:1, stagger:0.25}, 1);
covidPage.fromTo('.project-image-items', {opacity:0}, {y:"0%", opacity: 1, duration:2, stagger:0.25}, 1);


function portNav(){
    const homeHeader = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    homeHeader.addEventListener('mouseenter', function(){
       const id = this.getAttribute("id");
       const navActive = document.querySelector(`a[id="#${id}"]`);
       navLinks.forEach(link => link.classList.remove("active"));
       navActive.classList.add("active");
    });

}

portNav();

const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.project-images img');
const original = document.querySelector('.full-img');
const imgText = document.querySelector('.modal-caption');

const headerText = document.querySelectorAll('.project-land-text h2');
const projectLandingHeader = document.querySelector('.project-landing-text');
const projectLandingBody = document.querySelector('.project-info-body');

let complete = "";
headerText.forEach(word => {
    complete += word.textContent+" ";

    if(complete.length >= 20){
        
        projectLandingHeader.classList.add('long');
        projectLandingBody.classList.add('long');
    }
});


previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');
        //dynamic change text/img
        const originalSrc = preview.getAttribute('data-original');
        original.src = `./images/${originalSrc}`;

        const altTxt = preview.alt;
        imgText.textContent = altTxt;
    });
});

modal.addEventListener('click', (e) =>{
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open');
        original.classList.remove('open');
    }
});