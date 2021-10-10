import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";


console.clear();

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
gsap.defaults({ease: "none"});


const main = gsap.timeline({defaults: {duration: 1},
  scrollTrigger: {
    trigger: "#svg",
    scrub: true,
    start: "top center",
    end: "bottom center"
  }})
.to(".anim__ball", {duration: 0.01, autoAlpha: 1})
.from(".anim__line", {drawSVG: 1215}, 0)
.to(".anim__ball", {motionPath: {
  path: ".anim__line", 
  align:".anim__line",
  alignOrigin: [0.5, 0.5],
}}, 0)