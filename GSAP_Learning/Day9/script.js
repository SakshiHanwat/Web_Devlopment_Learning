//For only one element 
/*let h1Text = document.querySelector(".first1").textContent;

let splitedText = h1Text.split("");

let clutter = "";
splitedText.forEach(function(elem) {
    clutter += `<span>${elem}</span`
})
document.querySelector(".first1").innerHTML = clutter;

gsap.to(".page2 h1 span", {
    color: "#E3E3C4",
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".page2 h1",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 10%",
        scrub: 1
    }
})*/
function initLocomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

function textSplitting() {
    let allH1 = document.querySelectorAll(".page2 h1");
    allH1.forEach(function(elem) {
        let clutter = "";
        let h1Text = elem.textContent;
        let splitedText = h1Text.split("");
        splitedText.forEach(function(e) {
            clutter += `<span>${e}</span>`;
        });
        elem.innerHTML = clutter;
    });
}

function gsapAnimation() {
    gsap.to(".page2 h1 span", {
        color: "#E3E3C4",
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".page2 h1",
            scroller: ".main",
            markers: true,
            start: "top 50%",
            end: "top -10%",
            scrub: 1
        }
    });
}

initLocomotive();
textSplitting();
gsapAnimation();