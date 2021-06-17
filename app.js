
const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to('.text', {y:"0%", duration:1, stagger:0.25});
tl.to('.lock', {y:"0%", duration:1}, "-=.0.25");
tl.to('#unlock', {y:-80, duration: 1}, "-=0.25");
tl.to('.slider', {y: "-100%", duration: 1.5, delay: 1});
tl.to('.intro', {y:"-100%", duration: 1}, "-=1");
tl.fromTo('nav', {opacity: 0}, {opacity: 1});
tl.fromTo('.land-text', {opacity: 0}, {y:"0%", opacity:1, duration:1, stagger:0.25}, "-=0.5");

function portNav(){
    const homeHeader = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    homeHeader.addEventListener('mouseenter', function(){
       const id = this.getAttribute("id");
       const navActive = document.querySelector(`a[href="#${id}"]`);
       navLinks.forEach(link => link.classList.remove("active"));
       navActive.classList.add("active");
    });

    sections.forEach(section => {
        section.addEventListener('mouseenter', function(){
            const id = this.getAttribute("id");
            const navActive = document.querySelector(`a[href="#${id}"]`);
            navLinks.forEach(link => link.classList.remove("active"));
            navActive.classList.add("active");
        });
    });

}

portNav();

//Adding scroll in animation for about page
const tween = new TimelineLite();
const tween2 = new TimelineLite({repeat: -1, yoyoEase:Power2.easeOut}); //Tween for person
const tween3 = new TimelineLite({repeat: -1, yoyoEase:Power2.easeOut}); //Tween for shield

const dot1 = new TimelineLite({repeat: -1, yoyoEase: Power2.easeOut});
const dot2 = new TimelineLite({repeat: -1, yoyoEase: Power2.easeOut});
const dot3 = new TimelineLite({repeat: -1, yoyoEase: Power2.easeOut});
const dot4 = new TimelineLite({repeat: -1, yoyoEase: Power2.easeOut});
const dot5 = new TimelineLite({repeat: -1, yoyoEase: Power2.easeOut});
const dot6 = new TimelineLite({repeat: -1, yoyoEase: Power2.easeOut});
const dot7 = new TimelineLite({repeat: -1, yoyoEase: Power2.easeOut});
const dot8 = new TimelineLite({repeat: -1, yoyoEase: Power2.easeOut});
const dot9 = new TimelineLite({repeat: -1, yoyoEase: Power2.easeOut});
const dot10 = new TimelineLite({repeat: -1, yoyoEase: Power2.easeOut});
const dot11 = new TimelineLite({repeat: -1, yoyoEase: Power2.easeOut});
const dot12 = new TimelineLite({repeat: -1, yoyoEase: Power2.easeOut});
const dot13 = new TimelineLite({repeat: -1, yoyoEase: Power2.easeOut});
const dot14 = new TimelineLite({repeat: -1, yoyoEase: Power2.easeOut});
const dot15 = new TimelineLite({repeat: -1, yoyoEase: Power2.easeOut});


tween.add([
    TweenLite.fromTo('.about-info', 1, {
        opacity: 0
    },{
        opacity: 1,
        y: "0%",
        stagger: 0.25
    }),

    TweenLite.fromTo('.about-image', 1, {
        opacity: 0
    }, {
        opacity: 1
    }),

    //person
    TweenLite.to('#person', 3, tween2.add(
        TweenLite.to('#person', 3, {
            y: "-20"
        })
    )),

    //shield
    TweenLite.to('#shield', 3, tween3.add(
        TweenLite.fromTo('#shield', 3, {
            y: "-10"
        },{
            y: "0"
        })
    )),

    //dots
    TweenLite.to('#dot1', 3, dot1.add(
        TweenLite.fromTo('#dot1', 3, {
            y:"10"
        },{
            y:"-5",
        })
    )),

    TweenLite.to('#dot2', 4, dot2.add(
        TweenLite.fromTo('#dot2', 4, {
            y:"-25"
        },{
            y:"5"
        })
    )),

    TweenLite.to('#dot3', 3, dot3.add(
        TweenLite.fromTo('#dot3', 3, {
            y: "-30"
        },{
            y:"10"
        })
    )),

    TweenLite.to('#dot4', 4, dot4.add(
        TweenLite.fromTo('#dot4', 4, {
            y:"10"
        },{
            y:"-10"
        })
    )),

    TweenLite.to('#dot5', 3, dot5.add(
        TweenLite.fromTo('#dot5', 3, {
            y: "-20"
        }, {
            y: "10"
        })
    )),

    TweenLite.to('#dot6', 4, dot6.add(
        TweenLite.fromTo('#dot6', 4, {
            y: "-20"
        },{
            y:"10"
        })
    )),

    TweenLite.to('#dot7', 3, dot7.add(
        TweenLite.fromTo('#dot7', 3, {
            y: "30"
        },{
            y: "-5"
        })
    )),

    TweenLite.to('#dot8', 5, dot8.add(
        TweenLite.fromTo('#dot8', 5, {
            y:"-20"
        },{
            y:"10"
        })
    )),

    TweenLite.to('#dot9', 3, dot9.add(
        TweenLite.fromTo('#dot9', 3, {
            y:"20"
        },{
            y:"-30"
        })
    )),

    TweenLite.to('#dot10', 4, dot10.add(
        TweenLite.fromTo('#dot10', 4, {
            y:"-50"
        },{
            y:"30"
        })
    )),

    TweenLite.to('#dot11', 3, dot11.add(
        TweenLite.fromTo('#dot11', 3, {
            y:"30"
        },{
            y:"-30"
        })
    )),

    TweenLite.to('#dot12', 4, dot12.add(
        TweenLite.fromTo('#dot12', 4, {
            y:"20"
        },{
            y:"-10"
        })
    )),

    TweenLite.to('#dot13', 3, dot13.add(
        TweenLite.fromTo('#dot13', 3, {
            y:"-40"
        },{
            y:"30"
        })
    )),

    TweenLite.to('#dot14', 5, dot14.add(
        TweenLite.fromTo('#dot14', 5, {
            y:"-10"
        },{
            y:"20"
        })
    )),

    TweenLite.to('#dot15', 4, dot15.add(
        TweenLite.fromTo('#dot15', 4, {
            y:"20"
        },{
            y:"-30"
        })
    ))
])

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: "#about",
    duration: 1000,
    triggerHook: 0
})
.setTween(tween)
.addTo(controller)
.setPin("#about")

//scroll animation for projects
const projectsTween = new TimelineLite();

projectsTween.add([

    TweenLite.fromTo('.url-shortener', 1, {
        opacity:0,
        y:"50%"
    },{
        opacity: 1,
        y:"0%"
    }),

    TweenLite.fromTo('.url-description', 1, {
        opacity: 0,
    },{
        opacity: 1,
        y: "0%",
        stagger: 0.25
    }),
    TweenLite.fromTo('#url-short-button', 1, {
        opacity: 0,
        y:"100%"
    },{
        delay:1,
        opacity: 1,
        y:"0%"
    }),

    TweenLite.fromTo('.covid-data', 1, {
        opacity: 0,
        y:"100%"
    }, {
        delay: 0.25,
        y:"0%",
        opacity: 1
    }),

    TweenLite.fromTo('.covid-description', 1, {
        opacity: 0
    }, {
        delay:1,
        opacity: 1,
        y: "0%",
        stagger: 0.25
    }),

    TweenLite.fromTo('#covid-git-button', 1, {
        opacity: 0,
        y:"100%"
    },{
        delay:2,
        opacity: 1,
        y:"0%"
    }),

    TweenLite.fromTo('.macaroon-file-share', 1, {
        opacity:0,
        y:"100%"
    },{
        delay:0.5,
        opacity: 1,
        y:"0%"
    }),

    TweenLite.fromTo('.macaroon-description', 1, {
        opacity: 0
    }, {
        delay:1,
        opacity: 1,
        y: "0%",
        stagger: 0.25
    }),

    TweenLite.fromTo('#macaroon-git-button', 1, {
        opacity: 0,
        y:"100%"
    },{
        delay:2.5,
        opacity: 1,
        y:"0%"
    }),
    TweenLite.fromTo('.permission-based-2fa', 1, {
        opacity:0,
        y:"100%"
    },{
        delay:0.75,
        opacity: 1,
        y:"0%"
    }),

    TweenLite.fromTo('.pb-description', 1, {
        opacity: 0
    }, {
        delay:1,
        opacity: 1,
        y: "0%",
        stagger: 0.25
    }),

    TweenLite.fromTo('#pb-git-button', 1, {
        opacity: 0,
        y:"100%"
    },{
        delay:3,
        opacity: 1,
        y:"0%"
    })
])

const projController = new ScrollMagic.Controller();
const projScene = new ScrollMagic.Scene({
    triggerElement: "#projects",
    duration: 1000,
    triggerHook: 0
})
.setTween(projectsTween)
.addTo(projController)
.setPin('#projects')


//FOR CONTACT PAGE
const contactTween = new TimelineLite();

contactTween.add([
    TweenLite.fromTo('.contact-image', 1, {
        opacity: 0,
        y:"100%"
    },{
        opacity: 1,
        y:"0%"
    }),

    TweenLite.fromTo('.contact-info', 1, {
        opacity: 0
    },{
        y:"0%",
        opacity:1,
        stagger:0.25
    })
])

const contactController = new ScrollMagic.Controller();
const contScene = new ScrollMagic.Scene({
    triggerElement: "#contact",
    duration: 1000,
    triggerHook: 0
})
.setTween(contactTween)
.addTo(contactController)
.setPin('#contact')


const cloud1 = new TimelineLite({repeat: -1, ease: Power2.easeOut});
const cloud2 = new TimelineLite({repeat: -1, ease: Power2.easeOut});
const cloud3 = new TimelineLite({repeat: -1, ease: Power2.easeOut})

cloud1.add([
    TweenLite.fromTo('#cloud1', 50, {
        x:-100
    },{
        x:850
    }),

    TweenLite.to('#cloud2', 110,cloud2.add(
        TweenLite.fromTo('#cloud2', 110, {
            x:-100
        },{
            x:850
        })
    )),

    TweenLite.to('#cloud3', 100, cloud3.add(
        TweenLite.fromTo('#cloud3', 100, {
            x:200
        },{
            x:-850
        })
    ))
])