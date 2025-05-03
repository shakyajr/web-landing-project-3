var tl = gsap.timeline();

gsap.set(".a", {opacity: 0, y: 20});
gsap.set("#right img", {opacity: 0, y: 10, scale: 0.8});
tl
.from("#left",{
    width: 0,
    ease: Expo.easeInOut,
    duration: 1.4
})
.from("#right",{
    width: 0,
    ease: Expo.easeInOut,
    duration: 2,
    delay:-1
})
.to(".a",{
    opacity: 1,
    y: 0,
    ease: Expo.easeInOut,
    duration: 1.5,
    stagger:.18,
})
.to("#right img",{
    opacity: 1,
    scale: 1,
    y: 0,
    ease:Expo.easeInOut,
    duration: 2,
    delay: -1.5
})