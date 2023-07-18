var tl = gsap.timeline()

tl.from("#nav h1 ,#nav h4, #nav h5,#nav i",{
    opacity: 0,
    y: -50,
    duration: 1,
    delay: 0.5,
    stagger: 0.1
})
.from("#center>h1",{
    opacity: 0,
    duration: 0.7,
    y: 40,
    scale: 1.2,
})
.from("#center>p",{
    opacity: 0,
    duration: 0.3,
    y: 20,
})
.from("#page1 img",{
    opacity: 0,
    duration: 0.6,
    scale: 0.7
})

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page2 h1",
        scroller: "body",
       /* markers: true,*/
        start: "top 80%"
    }
})
tl2.from("#page2 h1",{
    y: 30,
    opacity: 0,
})
tl2.from("#page2 p",{
    y: 30,
    opacity: 0,
})
tl2.from("#page2 #content",{
    y: 100,
    opacity: 0,
    scale: 0.9
})