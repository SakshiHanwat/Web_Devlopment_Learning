/* use when initial to final 
gsap.to(".box", {
x: 1000,
    rotate: 360,
    backgroundColor: "blue",
    duration: 2,
    delay: 1
}) */

/*use when final to initial */
gsap.from(".box", {
    x: 1000,
    rotate: 360,
    backgroundColor: "blue",
    duration: 2,
    delay: 1
})