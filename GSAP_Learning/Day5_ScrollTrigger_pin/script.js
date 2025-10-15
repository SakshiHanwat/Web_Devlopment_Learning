gsap.to(".page2 img", {
    width: "100%",
    scrollTrigger: {
        trigger: ".page2",
        /*when u use pin property u only target parent property not chlid */
        scroller: "body",
        markers: true,
        start: "top 0",
        end: "top -100%",
        scrub: 2,
        pin: true
    }

})